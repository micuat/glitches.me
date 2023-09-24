import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  return {
    root: '.',
    plugins: [
    ],
    build: {
      cssCodeSplit: false,
      emptyOutDir: false,
      outDir: "./build",
      rollupOptions: {
        context: 'globalThis',
        input: {
          // the default entry point
          app: './index.html',
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
      }
    },
    define: {
      // global: "globalThis"
    },
  };
});
