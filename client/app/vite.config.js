import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     stream: "stream-browserify", // Map 'stream' to 'stream-browserify' for browser compatibility
  //   },
  // },
});
