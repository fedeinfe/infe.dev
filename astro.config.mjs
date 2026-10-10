// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://infe.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
