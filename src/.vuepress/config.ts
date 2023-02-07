import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
   
    "/zh/": {
      lang: "zh-CN",
      title: "Haocat的博客",
      description: "基于vuepress-theme-hope的博客",
    },
    "/": {
      lang: "en-US",
      title: "Haocat's Blog",
      description: "A blog using vuepress-theme-hope",
    },
  },

  theme,

  shouldPrefetch: false,
});
