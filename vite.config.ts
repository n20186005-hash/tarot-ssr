import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// 安全版配置：去掉了容易报错的 tailwindcss 插件和 babel 脚本
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: "/", // Must be absolute path for History API routing
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 确保路径别名正常工作
    },
  },
  server: {
    host: true, // 允许局域网访问
    port: 5173,
  },
});