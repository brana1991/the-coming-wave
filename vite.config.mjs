import { defineConfig } from 'vite';
import HtmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
  base: '/',

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
      input: 'promo/talas-koji-dolazi/index.html',
      output: {
        entryFileNames: 'promo/talas-koji-dolazi/assets/[name].[hash].js',
        chunkFileNames: 'promo/talas-koji-dolazi/assets/[name].[hash].js',
        assetFileNames: 'promo/talas-koji-dolazi/assets/[name].[hash][extname]',
      },
    },
    target: 'esnext',
    cssCodeSplit: true,
    emptyOutDir: true,
  },
});
