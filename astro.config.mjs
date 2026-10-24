import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production canonical URL. The GitHub Pages preview build sets SITE_BASE
// (e.g. /littleheartspace-site) via the preview workflow; production builds
// with base '/'.
export default defineConfig({
  site: 'https://littleheartspace.com',
  base: process.env.SITE_BASE || '/',
  integrations: [sitemap()],
});
