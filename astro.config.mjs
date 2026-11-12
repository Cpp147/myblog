import { defineConfig } from 'astro/config';

export default defineConfig({
  // 正式域名，用于生成规范链接和站点地图
  site: 'https://cpp147.github.io',
  // GitHub Pages 项目站点部署在 /myblog 路径下
  base: '/myblog',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
