import { defineConfig } from 'vite';
import HtmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
  base: "/",

  plugins: [
    HtmlMinifier({
      removeComments: true,
      collapseWhitespace: true,
      preserveLineBreaks: false,
      minifyCSS: true,
      minifyJS: true,
    }),
  ],
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: 'index.html',
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
    target: 'esnext',
    cssCodeSplit: true,
    emptyOutDir: true,
  },
});
