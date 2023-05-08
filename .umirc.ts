import {defineConfig} from "umi";

export default defineConfig({
  routes: [
    {path: "/", component: "index"},
    {path: "/login", component: "@/pages/LoginPage/Loadable.tsx"},
  ],
  npmClient: 'pnpm',
});
