import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: 上线前改成你的正式域名，用于生成规范链接
  site: 'https://example.com',
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});
