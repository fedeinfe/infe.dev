// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://fedeinfe.ai",
  vite: {
    plugins: [tailwindcss()],
  },
});
