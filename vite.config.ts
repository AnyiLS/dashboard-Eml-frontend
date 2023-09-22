import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import macrosPlugin from "vite-plugin-babel-macros";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), macrosPlugin()]
});