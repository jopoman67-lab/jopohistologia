import { createServerFn } from "@tanstack/react-start";
import { CONNECTIVES, EPITHELIA, ORGANS } from "./slides-data";

export type IdentifyResult = {
  ok: true;
  organ: string;
  organId: string | null;
  tissue: string;
  epithelium: string;
  epitheliumId: string | null;
  magnification: string;
  confidence: number;
  clues: string[];
  explanation: string;
  differential: string;
};

export type IdentifyFailure = { ok: false; error: string };

const CATALOG = ORGANS.map((o) => {
  const epi = o.epitheliumId
    ? EPITHELIA.find((e) => e.id === o.epitheliumId)
    : null;
  const con = o.connectiveId
    ? CONNECTIVES.find((c) => c.id === o.connectiveId)
    : null;
  const extra = [
    epi ? `epitelio ${epi.name}` : null,
    con ? `conectivo ${con.name}` : null,
  ]
    .filter(Boolean)
    .join("; ");
  return `- ${o.name} (${o.id}): ${o.system}, tejido ${o.tissue}${extra ? `, ${extra}` : ""}`;
}).join("\n");

export const identifySlide = createServerFn({ method: "POST" })
  .validator((input: { image: string; hint?: string }) => input)
  .handler(async ({ data }): Promise<IdentifyResult | IdentifyFailure> => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false, error: "El identificador no está disponible ahora." };
    }

    const image = data.image;
    if (!image.startsWith("data:image/") || image.length > 1_400_000) {
      return {
        ok: false,
        error: "La imagen es demasiado grande o no es válida. Prueba otra foto.",
      };
    }

    const prompt = `Eres un tutor de histología. Analiza la microfotografía (H&E, campo de microscopio).
Responde SOLO JSON válido, sin markdown, con esta forma:
{
  "organ": "nombre del órgano en español, o 'no identificable'",
  "organId": "id del catálogo si coincide, o null",
  "tissue": "epitelial | conectivo | muscular | nervioso | mixto | no identificable",
  "epithelium": "nombre del epitelio si aplica, si no null o 'no aplica'",
  "epitheliumId": "id del catálogo si coincide, o null",
  "magnification": "4x | 10x | 40x | desconocida",
  "confidence": 0-100,
  "clues": ["3 a 5 rasgos diagnósticos visibles"],
  "explanation": "párrafo breve en español de cómo lo reconociste",
  "differential": "con qué otra lámina se confunde y cómo distinguirla"
}

Catálogo de esta práctica (prioriza coincidencias si encaja; si no, identifica con conocimiento general):
${CATALOG}

Ids de epitelio: cubico-simple, transicion, cilindrico-simple, plano-estratificado-nq, plano-estratificado-q, plano-simple, seudo-ciliado-caliciforme, seudo-estereocilios, cilindrico-simple-borde.
Ids de conectivo: denso-regular (tendón), mucoso (gelatina de Wharton / cordón), adiposo-unilocular (mama).

Pistas frecuentes:
- Piel gruesa: plano estratificado QUERATINIZADO (capa córnea anucleada). Esófago: el mismo epitelio pero NO queratinizado.
- Tendón: haces de colágeno paralelos, fibroblastos aplanados. No es músculo.
- Cordón: arteria muscular + gelatina de Wharton. Vena umbilical: luz más amplia, endotelio plano simple + túnica media.
- Mama: adipocitos vacíos uniloculares, no coloide de tiroides.

${data.hint ? `Pista del usuario: ${data.hint}` : ""}
Sé concreto. Si la foto está borrosa o no es histología, dilo con confidence baja.`;

    const res = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "grok-4.5",
        temperature: 0.2,
        max_tokens: 900,
        response_format: { type: "json_object" },
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                image_url: { url: image, detail: "high" },
              },
              { type: "text", text: prompt },
            ],
          },
        ],
      }),
    });

    if (!res.ok) {
      return { ok: false, error: "No pude leer la lámina. Inténtalo de nuevo." };
    }

    const body = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const text = body.choices?.[0]?.message?.content ?? "";
    try {
      const parsed = JSON.parse(text) as Omit<IdentifyResult, "ok">;
      return {
        ok: true,
        organ: String(parsed.organ ?? "no identificable"),
        organId: parsed.organId ? String(parsed.organId) : null,
        tissue: String(parsed.tissue ?? "no identificable"),
        epithelium: String(parsed.epithelium ?? "—"),
        epitheliumId: parsed.epitheliumId ? String(parsed.epitheliumId) : null,
        magnification: String(parsed.magnification ?? "desconocida"),
        confidence: Math.max(0, Math.min(100, Number(parsed.confidence) || 0)),
        clues: Array.isArray(parsed.clues)
          ? parsed.clues.map(String).slice(0, 6)
          : [],
        explanation: String(parsed.explanation ?? ""),
        differential: String(parsed.differential ?? ""),
      };
    } catch {
      return { ok: false, error: "La lectura no se pudo interpretar." };
    }
  });
