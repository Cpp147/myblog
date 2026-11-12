import { defineConfig } from 'astro/config';

export default defineConfig({
  // 正式域名，用于生成规范链接和站点地图
  site: 'https://myblog-dp2drxf0tpba.edgeone.dev',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
