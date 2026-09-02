import { loadSiteContent } from "../../scripts/notion-content.mjs"

export const handler = async () => {
  try {
    const payload = await loadSiteContent()
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify(payload),
    }
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
      body: JSON.stringify({ content: null, blocks: null, source: "error", error: error.message }),
    }
  }
}
