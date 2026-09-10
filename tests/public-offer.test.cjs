const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');
const { createRequire } = require('node:module');
const root = path.resolve(__dirname, '..');
const localRequire = createRequire(path.join(root, 'package.json'));
const ts = localRequire('typescript');
const React = localRequire('react');
const { renderToStaticMarkup } = localRequire('react-dom/server');
const cache = new Map();
// Compile real local modules in memory. Only Next's image/link and stylesheet boundaries are replaced.
function load(file) {
  const absolute = path.resolve(root, file);
  if (cache.has(absolute)) return cache.get(absolute).exports;
  const module = { exports: {} }; cache.set(absolute, module);
  const code = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true
  }}).outputText;
  function requireModule(name) {
    if (name === 'next/link' || name === 'next/image') {
      return function View({ children, priority, fill, unoptimized, ...props }) {
        return React.createElement(name === 'next/link' ? 'a' : 'img', props, children);
      };
    }
    if (name.endsWith('.css')) return {};
    if (name.startsWith('@/') || name.startsWith('.')) {
      const base = name.startsWith('@/') ? path.join(root, name.slice(2)) : path.resolve(path.dirname(absolute), name);
      const match = [base, base + '.ts', base + '.tsx', path.join(base, 'index.tsx')].find(p => fs.existsSync(p) && fs.statSync(p).isFile());
      if (match) return load(match);
    }
    return localRequire(name);
  }
  new Function('require', 'module', 'exports', code)(requireModule, module, module.exports);
  return module.exports;
}
let checks = 0;
function check(condition, reason) { assert.ok(condition, reason); checks++; }
function render(file, props) { return renderToStaticMarkup(React.createElement(load(file).default, props)); }
const iconModule = load('app/components/icons/TogoIcon.tsx');
for (const name of ['TogoIcon', 'TogoIconFilled']) {
  const markup = renderToStaticMarkup(React.createElement(iconModule[name], { size: 32, color: '#123456', 'aria-label': 'Togo' }));
  check(markup.includes('lucide-dog') && !markup.includes('<ellipse'), name + ' uses current Hub dog glyph');
  check(markup.includes('width="32"') && markup.includes('#123456'), name + ' preserves size/color contract');
  check(markup.includes('aria-label="Togo"') && markup.includes('role="img"'), name + ' supports an accessible label');
}
check(renderToStaticMarkup(React.createElement(iconModule.TogoIcon)).includes('aria-hidden="true"'), 'Unlabeled inline Togo glyph is decorative');
const pricing = render('app/pricing/page.tsx');
check(pricing.includes('$79'), 'Starter renders approved $79 offer');
check(pricing.includes('1,500 base emails/month'), 'Starter renders approved base allowance');
check(!/\$49|500 emails\/month|Up to 4|manual stage moves|Grow &amp; up/.test(pricing), 'Retired Starter restrictions absent');
check(pricing.includes('owner only (no additional seats)'), 'Starter owner boundary explicit');
check(pricing.includes('SMS is not available on Starter or during the trial'), 'SMS paid/trial boundary explicit');
check(pricing.includes('USD/month'), 'Currency and interval explicit');
check(pricing.includes('25,000 base emails/month') && pricing.includes('75,000 base emails/month'), 'Other paid allowances preserved');
for (const feature of ['Automated funnel transition rules', 'Task lists', 'Lifecycle emails', 'BI reporting + CSV export', 'Website Chat Widget']) {
  const comparison = pricing.slice(pricing.indexOf('<tbody'));
  const row = comparison.slice(comparison.indexOf('>' + feature + '<')).split('</tr>')[0];
  check(row.includes('lucide-check') && !row.includes('lucide-x'), feature + ' included on Starter');
}
const faq = render('app/faqs/page.tsx');
const categories = load('lib/marketing-faqs.ts').faqCategories;
const structured = render('app/faqs/layout.tsx');
const json = JSON.parse(structured.match(/<script[^>]*>(.*?)<\/script>/s)[1]);
check(json.mainEntity.length === categories.flatMap(c => c.items).length, 'FAQ schema covers actual visible questions');
for (const item of categories.flatMap(c => c.items)) {
  check(json.mainEntity.some(x => x.name === item.question && x.acceptedAnswer.text === item.answer), 'FAQ schema/answer parity: ' + item.question);
}
check(faq.includes('<details') && faq.includes('<summary'), 'FAQ keyboard-native disclosures');
check(!/\$49|500 emails per month|25 Togo AI chats|\$20 per 1,000/.test(faq), 'Retired FAQ claims absent');
check(faq.includes('qualifying active Time To Pet connection') && faq.includes('read-only Insights'), 'Qualified post-trial experience explicit');
const links = load('lib/marketing-links.ts');
for (const base of ['https://hub.critter.pet', 'https://preview.example.test/']) {
  const ttp = links.getHubLinks('ttp', base);
  for (const action of ['signup', 'signin']) {
    const url = new URL(ttp[action]);
    check(url.searchParams.get('source') === 'ttp', action + ' retains source');
    check(url.searchParams.get('callbackUrl') === '/dashboard/home?source=ttp', action + ' retains fixed callback');
    check(url.origin === new URL(base).origin, action + ' honors configured Hub');
  }
  check(ttp.start === base.replace(/\/+$/, '') + '/dashboard/home?source=ttp', 'Direct authenticated destination remains available');
  check(!links.getHubLinks(undefined, base).signup.includes('?'), 'Generic signup unchanged');
}
const ttp = render('app/ttp/page.tsx');
check(!ttp.includes('<nav'), 'TTP acquisition page omits header/navigation');
check(pricing.includes('<nav'), 'Generic pricing retains website navigation');
check(ttp.includes('aria-label="Explore Critter capabilities"'), 'TTP includes labeled capability showcase');
for (const label of ['Snapshot', 'Journey', 'Lead capture', 'Programs', 'Task lists', 'Togo']) {
  check(ttp.includes('Show ' + label), 'Showcase includes direct choice: ' + label);
}
for (const label of ['Previous capability', 'Next capability']) {
  check(ttp.includes(label), 'Showcase includes accessible manual control: ' + label);
}
const anchors = [...ttp.matchAll(/href="([^"]+)"/g)].map(x => x[1].replaceAll('&amp;', '&'));
const authLinks = anchors.filter(x => /\/auth\/(signup|signin)/.test(x));
check(authLinks.length >= 4, 'TTP hero, final, footer trial and footer sign-in CTAs render');
check(authLinks.every(x => new URL(x).searchParams.get('source') === 'ttp'), 'Every rendered TTP auth CTA retains source');
check(authLinks.every(x => new URL(x).searchParams.get('callbackUrl') === links.TTP_DESTINATION), 'Every rendered TTP auth CTA retains callback');
check(ttp.includes('Illustrative product highlights') && !ttp.includes('98%'), 'No fabricated snapshot metric claim');
check(ttp.includes('critter-favicon-circle.png') && !ttp.includes('lucide-paw-print'), 'Snapshot uses Critter mark');
check(ttp.includes('read-only Insights') && ttp.includes('No SMS on Starter'), 'TTP post-trial and paid boundaries render');
check(load('app/sitemap.ts').default().some(x => x.url === 'https://critter.pet/ttp'), 'TTP discoverable in sitemap');
const metadata = load('app/pricing/layout.tsx').metadata;
check(metadata.description.includes('79') && metadata.openGraph.description.includes('1,500'), 'Pricing search/social metadata aligned');
const rootMarkup = render('app/layout.tsx');
check(rootMarkup.includes('&quot;lowPrice&quot;') || rootMarkup.includes('"lowPrice":"79"'), 'Aggregate offer low price aligned');
const ops = render('app/features/scheduling/page.tsx');
check(ops.includes('https://app.critter.pet') && ops.includes('Critter Ops'), 'Ops links remain distinct');
check(ops.includes('apply to Hub'), 'CRM trial not represented as Ops offer');
const adModule = load('app/ads/ad-components.tsx');
for (const ad of adModule.allAds) {
  const markup = renderToStaticMarkup(React.createElement(adModule.AdCanvas, { ad }));
  check(markup.includes('Illustrative preview') && !markup.includes('Start for free') && !markup.includes('Others don'), 'Ad copy boundary ' + ad.id);
}
for (const file of ['app/page.tsx', 'app/togo-ai/page.tsx', 'app/features/crm/page.tsx', 'app/features/data-integration/page.tsx', 'app/features/marketing/page.tsx', 'app/features/referrals/page.tsx', 'app/features/lead-generation/page.tsx']) {
  const markup = render(file);
  check(markup.includes('<h1') && !/Grow &amp; up|trained on your|only CRM/.test(markup), 'Actual product page renders aligned copy: ' + file);
}
console.log('Public offer actual-render checks: ' + checks + ' passed');
