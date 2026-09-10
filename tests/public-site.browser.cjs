const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const { createRequire } = require('node:module');
const localRequire = createRequire(path.resolve(__dirname, '../package.json'));
let chromium;
try { ({ chromium } = localRequire('playwright')); } catch {
  ({ chromium } = require(path.join(process.env.CRITTER_TEST_TOOLS || '/Users/jl/code/critter-comms-hub/node_modules', 'playwright')));
}
const origin = process.env.CRITTER_TEST_ORIGIN || 'http://127.0.0.1:3197';
assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(new URL(origin).hostname), 'Local test server only');
const artifacts = process.env.CRITTER_TEST_ARTIFACTS || '/private/tmp/bl403-website-browser';
let checks = 0;
function check(value, message) { assert.ok(value, message); checks++; }
async function main() {
  await fs.mkdir(artifacts, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of [1440, 768, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      const pageErrors = [];
      page.on('pageerror', error => pageErrors.push(error.message));
      // No external website, analytics, Hub, or provider calls. The existing partner logo has a synthetic stand-in.
      await page.route('**/*', async route => {
        const url = new URL(route.request().url());
        if (url.origin === origin || url.protocol === 'data:') return route.continue();
        if (url.hostname === 'hub.critter.pet' && /^\/auth\/(signup|signin)$/.test(url.pathname)) return route.fulfill({ contentType: 'text/html', body: '<h1>Local synthetic Hub navigation boundary</h1>' });
        if (url.href === 'https://www.timetopet.com/images/logo-ttp-color.svg') return route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="40"><text x="0" y="27" fill="#430018" font-family="sans-serif" font-size="20">Time To Pet</text></svg>' });
        return route.abort();
      });
      await page.goto(origin + '/ttp');
      await page.getByRole('heading', { level: 1 }).waitFor();
      check((await page.title()).includes('Time To Pet + Critter'), 'TTP metadata rendered');
      check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'TTP no horizontal overflow at ' + width);
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.waitForFunction(() => { const image = document.querySelector('footer img'); return image && image.complete && image.naturalWidth > 0; });
      check(await page.locator('footer img').evaluate(image => image.naturalWidth > 0), 'Footer brand asset loads');
      check(await page.locator('footer img').evaluate(image => getComputedStyle(image).filter.includes('invert(1)')), 'Footer brand stays white against orange');
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: path.join(artifacts, 'ttp-' + width + '.png'), fullPage: true });
      if (width < 1024) {
        await page.getByRole('button', { name: 'Toggle menu' }).click();
        check(await page.getByRole('link', { name: 'Hub Login' }).isVisible(), 'Mobile Hub login accessible');
        const mobileLogin = new URL(await page.getByRole('link', { name: 'Hub Login' }).getAttribute('href'));
        check(mobileLogin.searchParams.get('source') === 'ttp', 'Mobile sign-in keeps source');
        await page.getByRole('button', { name: 'Toggle menu' }).click();
      } else {
        await page.getByRole('button', { name: 'Log In', exact: true }).click();
        const login = page.getByRole('menuitem').filter({ hasText: 'Critter Hub CRM' });
        check(new URL(await login.getAttribute('href')).searchParams.get('source') === 'ttp', 'Desktop sign-in keeps source');
        await page.keyboard.press('Escape');
      }
      const trial = page.getByRole('link', { name: 'Start your 7-day Critter trial' }).first();
      const trialUrl = new URL(await trial.getAttribute('href'));
      check(trialUrl.pathname === '/auth/signup', 'New visitor starts at signup');
      check(trialUrl.searchParams.get('source') === 'ttp' && trialUrl.searchParams.get('callbackUrl') === '/dashboard/home?source=ttp', 'Trial link preserves fixed onboarding destination');
      await page.getByText('Does this replace Time To Pet?', { exact: true }).focus();
      await page.keyboard.press('Enter');
      check(await page.locator('details[open]').count() === 1, 'TTP FAQ keyboard opens');
      await trial.click();
      await page.waitForURL(url => url.pathname === '/auth/signup');
      check(new URL(page.url()).searchParams.get('callbackUrl') === '/dashboard/home?source=ttp', 'Actual trial click reaches synthetic signup boundary with context');
      await page.goto(origin + '/pricing');
      check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Pricing table scrolls locally at ' + width);
      check((await page.locator('main, body').first().innerText()).includes('1,500 base emails/month'), 'Real browser pricing allowance');
      const defaultSignup = await page.locator('a[href$="/auth/signup"]').first().getAttribute('href');
      check(!defaultSignup.includes('?'), 'TTP intent does not leak to generic pricing');
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.waitForFunction(() => { const image = document.querySelector('footer img'); return image && image.complete && image.naturalWidth > 0; });
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: path.join(artifacts, 'pricing-' + width + '.png'), fullPage: true });
      await page.getByRole('button', { name: 'Choose Starter', exact: true }).click();
      await page.waitForURL(url => url.pathname === '/auth/signup');
      check(new URL(page.url()).searchParams.get('plan') === 'starter', 'Plan selection remains a signup preference, not a checkout');
      await page.goto(origin + '/faqs');
      await page.getByText("What's the difference between the plans?", { exact: true }).click();
      check((await page.locator('details[open]').innerText()).includes('owner-only access'), 'Actual FAQ interaction shows current plan');
      await page.screenshot({ path: path.join(artifacts, 'faqs-' + width + '.png'), fullPage: true });
      check(pageErrors.length === 0, 'No browser runtime errors: ' + pageErrors.join('; '));
      await page.close();
    }
    console.log('Public website browser checks: ' + checks + ' passed. Captures: ' + artifacts);
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
