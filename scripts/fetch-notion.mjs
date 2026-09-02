/**
 * Optional CLI: dump current Notion content to stdout. The site itself
 * fetches Notion at runtime via /api/content — you do not need this.
 */
import "dotenv/config"
import { loadSiteContent } from "./notion-content.mjs"

const payload = await loadSiteContent()
console.log(JSON.stringify(payload, null, 2))
if (payload.warnings?.length) {
  for (const message of payload.warnings) console.warn(`[notion] warning: ${message}`)
}
