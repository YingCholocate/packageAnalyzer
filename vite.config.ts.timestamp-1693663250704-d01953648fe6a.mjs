// vite.config.ts
import { defineConfig } from "file:///D:/workplace/node-exercise/packageAnalyzer/node_modules/.pnpm/vite@4.4.5_@types+node@20.5.7_terser@5.19.3/node_modules/vite/dist/node/index.js";
import react from "file:///D:/workplace/node-exercise/packageAnalyzer/node_modules/.pnpm/@vitejs+plugin-react@4.0.3_vite@4.4.5/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\workplace\\node-exercise\\packageAnalyzer";
var vite_config_default = defineConfig({
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
      "/view": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3b3JrcGxhY2VcXFxcbm9kZS1leGVyY2lzZVxcXFxwYWNrYWdlQW5hbHl6ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtwbGFjZVxcXFxub2RlLWV4ZXJjaXNlXFxcXHBhY2thZ2VBbmFseXplclxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29ya3BsYWNlL25vZGUtZXhlcmNpc2UvcGFja2FnZUFuYWx5emVyL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogJy4vJyxcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICAvLyBcdTZEODhcdTk2NjRcdTYyNTNcdTUzMDVcdTU5MjdcdTVDMEZcdThEODVcdThGQzc1MDBrYlx1OEI2Nlx1NTQ0QVxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogNDAwMCxcbiAgICBvdXREaXI6ICdidWlsZC9zZXJ2ZXIvcHVibGljJyxcbiAgICByb2xsdXBPcHRpb25zOiB7fSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcHJveHk6IHtcbiAgICAgICcvZGF0YSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICBwYXRoUmV3cml0ZToge1xuICAgICAgICAgICdeL2FwaSc6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgICcvdmlldyc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcbiAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICBwYXRoUmV3cml0ZToge1xuICAgICAgICAgICdeL2FwaSc6ICcnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXdULFNBQVMsb0JBQW9CO0FBQ3JWLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFJekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTTtBQUFBLEVBQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxJQUNwQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQTtBQUFBLElBRVgsdUJBQXVCO0FBQUEsSUFDdkIsUUFBUTtBQUFBLElBQ1IsZUFBZSxDQUFDO0FBQUEsRUFDbEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGFBQWE7QUFBQSxVQUNYLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsY0FBYztBQUFBLFFBQ2QsYUFBYTtBQUFBLFVBQ1gsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
