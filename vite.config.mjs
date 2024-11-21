import { defineConfig } from 'vite';
import HtmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig({
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
    outDir: 'dist', // Output directory
    minify: 'esbuild', // Use esbuild for JS and CSS minification (default)
    sourcemap: false, // Optionally disable sourcemaps in production
    rollupOptions: {
      input: 'index.html', // Ensure Vite uses this as the entry point
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]',
      },
    },
    target: 'esnext', // Target modern JavaScript
    cssCodeSplit: true, // Enable CSS code splitting (default)
    emptyOutDir: true, // Clean output directory before build (default)
  },
});
