/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
// https://vitejs.dev/config/
export default () =>
  defineConfig({
    base: './',
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4000,
      outDir: 'build/server/public',
      rollupOptions: {},
    },
    server: {
      proxy: {
        '/data': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
        '/depth': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        },
      },
    },
    css: {
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {},
      },
    },
  });
