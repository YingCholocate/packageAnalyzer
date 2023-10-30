// vite.config.ts
import { defineConfig, loadEnv } from "file:///D:/workplace/node-exercise/packageAnalyzer/node_modules/.pnpm/vite@4.4.5_@types+node@20.5.7_sass@1.68.0_terser@5.19.3/node_modules/vite/dist/node/index.js";
import path from "path";
import react from "file:///D:/workplace/node-exercise/packageAnalyzer/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\workplace\\node-exercise\\packageAnalyzer";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log(env == null ? void 0 : env.VITE_ENV);
  return {
    base: "./",
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      }
    },
    build: {
      sourcemap: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 4e3,
      outDir: "build/server/public",
      rollupOptions: {}
    },
    server: {
      proxy: {
        "/data": {
          target: "http://localhost:3000",
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        },
        "/depth": {
          target: "http://localhost:3000",
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    },
    css: {
      /* CSS 预处理器 */
      preprocessorOptions: {
        scss: {}
      }
    },
    define: {
      __APP_ENV__: env.APP_ENV
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrcGxhY2VcXFxcbm9kZS1leGVyY2lzZVxcXFxwYWNrYWdlQW5hbHl6ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtwbGFjZVxcXFxub2RlLWV4ZXJjaXNlXFxcXHBhY2thZ2VBbmFseXplclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29ya3BsYWNlL25vZGUtZXhlcmNpc2UvcGFja2FnZUFuYWx5emVyL3ZpdGUuY29uZmlnLnRzXCI7LyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksICcnKTtcbiAgY29uc29sZS5sb2coZW52Py5WSVRFX0VOVik7XG5cbiAgcmV0dXJuIHtcbiAgICBiYXNlOiAnLi8nLFxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICAgIC8vIFx1NkQ4OFx1OTY2NFx1NjI1M1x1NTMwNVx1NTkyN1x1NUMwRlx1OEQ4NVx1OEZDNzUwMGtiXHU4QjY2XHU1NDRBXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDQwMDAsXG4gICAgICBvdXREaXI6ICdidWlsZC9zZXJ2ZXIvcHVibGljJyxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHt9LFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICAnL2RhdGEnOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcGF0aFJld3JpdGU6IHtcbiAgICAgICAgICAgICdeL2FwaSc6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICcvZGVwdGgnOiB7XG4gICAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcGF0aFJld3JpdGU6IHtcbiAgICAgICAgICAgICdeL2FwaSc6ICcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgY3NzOiB7XG4gICAgICAvKiBDU1MgXHU5ODg0XHU1OTA0XHU3NDA2XHU1NjY4ICovXG4gICAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICAgIHNjc3M6IHt9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmluZToge1xuICAgICAgX19BUFBfRU5WX186IGVudi5BUFBfRU5WLFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFVBQVU7QUFDakIsT0FBTyxXQUFXO0FBSGxCLElBQU0sbUNBQW1DO0FBS3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxVQUFRLElBQUksMkJBQUssUUFBUTtBQUV6QixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDakIsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLE1BQ3BDO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBO0FBQUEsTUFFWCx1QkFBdUI7QUFBQSxNQUN2QixRQUFRO0FBQUEsTUFDUixlQUFlLENBQUM7QUFBQSxJQUNsQjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsYUFBYTtBQUFBLFlBQ1gsU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsUUFDQSxVQUFVO0FBQUEsVUFDUixRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxhQUFhO0FBQUEsWUFDWCxTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSztBQUFBO0FBQUEsTUFFSCxxQkFBcUI7QUFBQSxRQUNuQixNQUFNLENBQUM7QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sYUFBYSxJQUFJO0FBQUEsSUFDbkI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
