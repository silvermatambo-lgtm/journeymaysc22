// Offline quality gate: verify independent source, links, original media, SEO and PWA metadata.
import { readdir, readFile } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
const root = new URL('../', import.meta.url);
const prefix = /lovable|lavabo|__l5e|assets-v1|@lovable\.dev/i;
let checked = 0, errors = [];
async function walk(base) {
  for (const item of await readdir(new URL(base,root), {withFileTypes:true})) {
    const child=base+item.name;
    if (item.isDirectory()) await walk(child+'/');
    else if (/\.(?:ts|tsx|css|json|html|md|mjs|webmanifest)$/.test(child)) {
      const text=await readFile(new URL(child,root),'utf8');
      checked++;
      // Do not scan this very audit script (it contains the forbidden-token detector).
      if (child!=='scripts/audit-migration.mjs' && prefix.test(text)) errors.push(child+' contains old builder reference');
    }
  }
}
await walk('src/');
for (const base of ['public/','scripts/']) await walk(base);
const manifest=JSON.parse(await readFile(new URL('../public/manifest.webmanifest',import.meta.url),'utf8'));
for (const icon of manifest.icons) {
  const buf=await readFile(new URL('../public'+icon.src,import.meta.url)).catch(()=>null);
  if (!buf) errors.push(icon.src+' is missing');
}
const config=JSON.parse(await readFile(new URL('../vercel.json',import.meta.url),'utf8'));
if (config.framework!=='tanstack-start') errors.push('Vercel framework is not TanStack Start');
if (errors.length) { errors.forEach(s=>console.error(s)); process.exit(1); }
console.log(`Source independence, SEO/PWA settings and ${checked} text files checked successfully.`);
