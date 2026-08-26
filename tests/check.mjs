import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('index.html', root), 'utf8');
const css = readFileSync(new URL('styles.css', root), 'utf8');
const js = readFileSync(new URL('script.js', root), 'utf8');

assert.match(html, /<main id="conteudo" tabindex="-1">/);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.equal((html.match(/class="product(?: |")/g) || []).length, 6);
assert.equal((html.match(/data-product=/g) || []).length, 6);
assert.equal((html.match(/src="assets\/product-[^"]+\.webp"/g) || []).length, 6);
assert.match(html, /src="assets\/hero-editorial\.webp"/);
assert.equal((html.match(/src="assets\/teagar-company-mark\.webp"/g) || []).length, 2);
assert.equal((html.match(/alt="/g) || []).length >= 10, true);
assert.match(html, /meta name="description"/);
assert.equal((html.match(/aria-label="Adicionar [^"]+ à sacola"/g) || []).length, 6);
assert.equal((html.match(/class="filter(?: active)?"/g) || []).length, 5);
assert.equal((html.match(/aria-pressed="true"/g) || []).length, 1);
assert.equal((html.match(/aria-pressed="false"/g) || []).length, 4);
assert.match(html, /id="filter-status" aria-live="polite"/);
assert.match(html, /<span class="bag">SACOLA/);
assert.doesNotMatch(html, /aria-expanded=/);
assert.match(html, /<form id="signup-form" novalidate>/);
assert.match(html, /autocomplete="email"/);
assert.match(html, /aria-describedby="email-help email-error"/);
assert.match(html, /id="email-error" aria-live="polite"/);
assert.doesNotMatch(html, /href="#closing">(?:Conhecer|Ler)/);
assert.doesNotMatch(html, /href="#top">Instagram/);

const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id));
for (const [, href] of html.matchAll(/\bhref="(#[^"]+)"/g)) {
  assert(ids.has(href.slice(1)), `Fragmento sem destino: ${href}`);
}
for (const [, asset] of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)) {
  assert(existsSync(new URL(asset, root)), `Asset ausente: ${asset}`);
}
for (const file of readdirSync(new URL('assets/', root))) {
  assert.match(file, /\.(?:avif|jpe?g|png|svg|webp)$/i, `Formato de asset inesperado: ${file}`);
}

assert.match(css, /prefers-reduced-motion:reduce/);
assert.match(css, /@media\(max-width:720px\)/);
assert.match(css, /--signal-text:#a64000;--signal-light:#ffb17a/);
assert.match(css, /\.closing em,\.closing \.eyebrow,\.form-status,\.form-error\{color:var\(--signal-light\)\}/);
assert.match(css, /:focus-visible\{outline:3px solid currentColor;outline-offset:3px;box-shadow:0 0 0 6px var\(--signal\)\}/);
assert.match(css, /\.edition\{grid-column:1\/-1;grid-row:2\}/);
assert.match(css, /\.footer\{grid-template-columns:1fr\}/);
assert.match(css, /\.add>span\[aria-hidden="true"\]\{float:right;font-size:20px\}/);
assert.doesNotMatch(css, /\.add span\{/);

assert.match(js, /setAttribute\('aria-pressed', selected\)/);
assert.match(js, /product:not\(\[hidden\]\)/);
assert.match(js, /querySelector\('\.add-label'\)/);
assert.match(js, /email\.validity\.valid/);
assert.match(js, /setAttribute\('aria-invalid', 'true'\)/);
assert.match(js, /email\.focus\(\)/);

console.log('TCA checks: estrutura, destinos, assets e estados acessíveis OK');
