import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // Emite avisos em vez de erros
      emitError: false, // Não emite erros
    }),
  ],
});
