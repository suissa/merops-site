import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true,
      interval: 1000,
    },
    hmr: {
      overlay: true,
    },
  },
  preview: {
    host: "::", // Você pode querer manter o mesmo host do server ou ajustar conforme necessário
    port: 8080, // Você pode querer manter a mesma porta do server ou ajustar conforme necessário
    allowedHosts: [
      "merops.oncorithms.institute",
      // Adicione outros hosts permitidos aqui, se necessário
    ],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
