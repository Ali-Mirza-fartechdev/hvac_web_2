/**
 * Static prerender: renders every route to its own HTML file in dist/ so crawlers
 * and first paint get real content + per-page metadata. The client then hydrates.
 * Also writes sitemap.xml and robots.txt.
 */
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');

const routes = [
  '/',
  '/services',
  '/services/ac-repair',
  '/services/ac-installation',
  '/services/heating',
  '/services/maintenance',
  '/about',
  '/service-areas',
  '/reviews',
  '/financing-specials',
  '/contact',
  '/privacy',
];

const siteUrl = (process.env.VITE_SITE_URL || 'https://www.example.com').replace(/\/$/, '');

const template = await readFile(join(dist, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href);

function inject(tpl, { html, head }, route) {
  return tpl
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace('<!--seo-head-->', head)
    .replace('<div id="root">', `<div id="root" data-prerender-path="${route}">`)
    .replace('<!--app-html-->', html);
}

for (const url of routes) {
  const out = await render(url);
  const file = url === '/' ? join(dist, 'index.html') : join(dist, url.slice(1), 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, inject(template, out, url));
  console.log(`prerendered ${url}`);
}

// 404 page (Vercel serves /404.html for unmatched static paths)
{
  const out = await render('/__not-found__');
  await writeFile(join(dist, '404.html'), inject(template, out, '__404__'));
  console.log('prerendered 404.html');
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((r) => r !== '/privacy')
  .map((r) => `  <url><loc>${siteUrl}${r === '/' ? '' : r}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
await writeFile(join(dist, 'sitemap.xml'), sitemap);
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);

await rm(ssrDir, { recursive: true, force: true });
console.log('sitemap.xml and robots.txt written');
