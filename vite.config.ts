import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import "dotenv/config";
// Shared fetch lives in a Node ESM module used by Netlify too.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error — no types for the .mjs fetch helper
import { loadSiteContent } from "./scripts/notion-content.mjs";

function notionContentApi(): Plugin {
  return {
    name: "notion-content-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/api/content") return next();

        try {
          const payload = await loadSiteContent();
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Cache-Control", "no-store");
          res.end(JSON.stringify(payload));
        } catch (error) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ content: null, blocks: null, source: "error" }));
        }
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    notionContentApi(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
