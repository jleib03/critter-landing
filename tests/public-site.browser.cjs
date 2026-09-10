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
const capabilityLabels = ['Snapshot', 'Journey', 'Lead capture', 'Programs', 'Task lists', 'Togo'];
let checks = 0;
function check(value, message) { assert.ok(value, message); checks++; }
async function isolate(page) {
  await page.route('**/*', async route => {
    const url = new URL(route.request().url());
    if (url.origin === origin || url.protocol === 'data:') return route.continue();
    if (url.hostname === 'hub.critter.pet' && /^\/auth\/(signup|signin)$/.test(url.pathname)) return route.fulfill({ contentType: 'text/html', body: '<h1>Local synthetic Hub navigation boundary</h1>' });
    if (url.href === 'https://www.timetopet.com/images/logo-ttp-color.svg') return route.fulfill({ contentType: 'image/svg+xml', body: '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="40"><text x="0" y="27" fill="#430018" font-family="sans-serif" font-size="20">Time To Pet</text></svg>' });
    return route.abort();
  });
}
async function currentCapability(region) {
  return region.locator('button[aria-current="true"]').getAttribute('aria-label');
}
async function moveOutsideShowcase(page) {
  // Remain inside the document. Chromium may not dispatch pointerleave at its exact (0,0) edge.
  await page.mouse.move(20, 20, { steps: 3 });
  await page.getByRole('region', { name: 'Explore Critter capabilities' }).evaluate(element => {
    const assertOutside = !element.matches(':hover');
    if (!assertOutside) throw new Error('Pointer did not leave the showcase');
  });
}
async function waitForObservedVisibility(region, visible) {
  await region.evaluate((element, expected) => new Promise(resolve => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting === expected) { observer.disconnect(); resolve(); }
    }, { threshold: 0.25 });
    observer.observe(element);
  }), visible);
}
async function waitForCapabilityChange(region, previous) {
  await region.locator(`button[aria-current="true"]:not([aria-label=${JSON.stringify(previous)}])`).waitFor({ timeout: 2000 });
}
async function checkRotationHitTarget(region) {
  check(await region.locator('[data-rotation-control]').evaluate(button => {
    const rect = button.getBoundingClientRect();
    return document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2) === button;
  }), 'Play/Pause keeps a stable button pointer target when its icon changes');
}
async function main() {
  await fs.mkdir(artifacts, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  try {
    for (const width of process.env.CRITTER_TEST_TIMING_ONLY === '1' || process.env.CRITTER_TEST_TOUCH_ONLY === '1' ? [] : [320, 390, 768, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      const pageErrors = [];
      page.on('pageerror', error => pageErrors.push(error.message));
      // No external website, analytics, Hub, or provider calls. The existing partner logo has a synthetic stand-in.
      await isolate(page);
      await page.goto(origin + '/ttp');
      await page.getByRole('heading', { level: 1 }).waitFor();
      check((await page.title()).includes('Time To Pet + Critter'), 'TTP metadata rendered');
      const ttpNav = page.getByRole('navigation');
      check(await ttpNav.count() === 1, 'TTP retains the shared header/navigation');
      check(await ttpNav.locator('a[href="/ttp"]').count() === 0, 'TTP header has no redundant Time To Pet menu item');
      check(await page.locator('footer a[href="/ttp"]').count() === 0, 'TTP footer has no partner callout');
      check((await page.locator('main > section').first().boundingBox()).y >= (await ttpNav.boundingBox()).height, 'TTP hero clears the fixed header');
      if (width < 1024) {
        await ttpNav.getByRole('button', { name: 'Toggle menu' }).click();
        const login = new URL(await ttpNav.getByRole('link', { name: 'Hub Login' }).getAttribute('href'));
        check(login.searchParams.get('source') === 'ttp' && login.searchParams.get('callbackUrl') === '/dashboard/home?source=ttp', 'TTP mobile login retains acquisition context');
        check(await ttpNav.locator('a[href="/ttp"]').count() === 0, 'TTP mobile menu has no redundant partner entry');
        await ttpNav.getByRole('button', { name: 'Toggle menu' }).click();
      } else {
        await ttpNav.getByRole('button', { name: 'Log In', exact: true }).click();
        const login = new URL(await page.getByRole('menuitem').filter({ hasText: 'Critter Hub CRM' }).getAttribute('href'));
        check(login.searchParams.get('source') === 'ttp' && login.searchParams.get('callbackUrl') === '/dashboard/home?source=ttp', 'TTP desktop login retains acquisition context');
        await page.keyboard.press('Escape');
      }
      if (!await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)) {
        await page.screenshot({ path: path.join(artifacts, 'ttp-overflow-' + width + '.png'), fullPage: true });
        console.log('Overflow diagnostics', await page.evaluate(() => Array.from(document.querySelectorAll('main *')).filter(element => { const box = element.getBoundingClientRect(); return box.right > innerWidth + 1 || box.left < -1; }).slice(0, 12).map(element => ({ tag: element.tagName, className: element.getAttribute('class'), text: element.textContent.slice(0, 80), width: element.getBoundingClientRect().width }))));
      }
      check(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'TTP no horizontal overflow at ' + width);
      const region = page.getByRole('region', { name: 'Explore Critter capabilities' });
      await region.getByRole('button', { name: 'Play highlights' }).waitFor();
      check(await currentCapability(region) === 'Show Snapshot', 'Reduced-motion starts on Snapshot');
      const initialBounds = await region.boundingBox();
      const slideHeadings = new Set();
      const layoutIssues = [];
      for (const label of capabilityLabels) {
        await region.getByRole('button', { name: 'Show ' + label, exact: true }).click();
        if (width === 1440 || width === 390 || width === 320) await region.screenshot({ path: path.join(artifacts, 'capability-' + label.toLowerCase().replaceAll(' ', '-') + '-' + width + '.png') });
        check(await currentCapability(region) === 'Show ' + label, 'Direct selection: ' + label + ' at ' + width);
        check(await region.locator('article').evaluate(article => article.scrollWidth <= article.clientWidth), 'No slide horizontal overflow: ' + label + ' at ' + width);
        for (const [name, locator] of [['Graphic', region.locator('article > div').nth(1)], ['Heading', region.getByRole('heading').first()], ['Description', region.locator('article > p')]]) {
          const dimensions = await locator.evaluate(element => ({ scrollHeight: element.scrollHeight, clientHeight: element.clientHeight }));
          if (dimensions.scrollHeight > dimensions.clientHeight + 1) layoutIssues.push({ label, width, name, ...dimensions });
          else checks++;
        }
        slideHeadings.add(await region.getByRole('heading').first().innerText());
        check(Math.abs((await region.boundingBox()).height - initialBounds.height) <= 1, 'Stable showcase height: ' + label + ' at ' + width);
      }
      check(layoutIssues.length === 0, 'All slide contents fit their allocated rows: ' + JSON.stringify(layoutIssues));
      check(slideHeadings.size === 6, 'Each capability has distinct explanatory heading');
      await region.getByRole('button', { name: 'Next capability' }).click();
      check(await currentCapability(region) === 'Show Snapshot', 'Next wraps to Snapshot');
      await region.getByRole('button', { name: 'Previous capability' }).click();
      check(await currentCapability(region) === 'Show Togo', 'Previous wraps to Togo');
      await region.getByRole('button', { name: 'Show Snapshot', exact: true }).click();
      await page.locator('footer').scrollIntoViewIfNeeded();
      await page.waitForFunction(() => { const image = document.querySelector('footer img'); return image && image.complete && image.naturalWidth > 0; });
      check(await page.locator('footer img').evaluate(image => image.naturalWidth > 0), 'Footer brand asset loads');
      check(await page.locator('footer img').evaluate(image => getComputedStyle(image).filter.includes('invert(1)')), 'Footer brand stays white against orange');
      await page.evaluate(() => scrollTo(0, 0));
      if (width === 1440 || width === 320) await page.screenshot({ path: path.join(artifacts, 'ttp-hero-' + width + '.png') });
      await page.screenshot({ path: path.join(artifacts, 'ttp-' + width + '.png'), fullPage: true });
      const footerLogin = new URL(await page.getByRole('link', { name: 'Sign In', exact: true }).getAttribute('href'));
      check(footerLogin.searchParams.get('source') === 'ttp', 'Footer sign-in retains TTP intent');
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
      check(await page.getByRole('navigation').count() === 1, 'Generic pricing retains navigation');
      check(await page.locator('footer a[href="/ttp"]').count() === 0, 'Generic footer has no partner callout');
      check(await page.getByRole('navigation').locator('a[href="/ttp"]').count() === 0, 'Desktop header excludes Time To Pet');
      if (width < 1024) {
        await page.getByRole('button', { name: 'Toggle menu' }).click();
        check(await page.getByRole('link', { name: 'Hub Login' }).isVisible(), 'Generic mobile navigation still works');
        check(await page.getByRole('navigation').locator('a[href="/ttp"]').count() === 0, 'Expanded mobile header excludes Time To Pet');
        check(!new URL(await page.getByRole('link', { name: 'Hub Login' }).getAttribute('href')).search, 'Generic mobile login remains context-free');
        await page.getByRole('button', { name: 'Toggle menu' }).click();
      } else {
        await page.getByRole('button', { name: 'Log In', exact: true }).click();
        check(!new URL(await page.getByRole('menuitem').filter({ hasText: 'Critter Hub CRM' }).getAttribute('href')).search, 'Generic desktop login remains context-free');
        await page.keyboard.press('Escape');
      }
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
    // Real component timers with a local browser clock; no long wall-clock sleeps.
    if (process.env.CRITTER_TEST_TOUCH_ONLY !== '1') {
    const motionPage = await browser.newPage({ viewport: { width: 1440, height: 1100 }, reducedMotion: 'no-preference' });
    await isolate(motionPage);
    await motionPage.clock.install();
    await motionPage.goto(origin + '/ttp');
    const showcase = motionPage.getByRole('region', { name: 'Explore Critter capabilities' });
    await showcase.getByRole('button', { name: 'Pause highlights' }).waitFor();
    await showcase.scrollIntoViewIfNeeded();
    await checkRotationHitTarget(showcase);
    await moveOutsideShowcase(motionPage);
    await motionPage.clock.runFor(100);
    await motionPage.clock.runFor(6800);
    check(await currentCapability(showcase) === 'Show Snapshot', 'No premature autoplay advance');
    await motionPage.clock.runFor(200);
    check(await currentCapability(showcase) === 'Show Journey', 'Autoplay advances after seven seconds');
    await showcase.getByRole('button', { name: 'Pause highlights' }).focus();
    await showcase.getByRole('button', { name: 'Play highlights' }).waitFor();
    await checkRotationHitTarget(showcase);
    const rotationFocus = await currentCapability(showcase);
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === rotationFocus, 'Keyboard focus on rotation control also stops autoplay');
    await showcase.getByRole('button', { name: 'Play highlights' }).click();
    await moveOutsideShowcase(motionPage);
    await motionPage.getByRole('link', { name: 'Start your 7-day Critter trial' }).first().focus();
    await showcase.getByRole('button', { name: 'Pause highlights' }).click();
    await moveOutsideShowcase(motionPage);
    const pointerPaused = await currentCapability(showcase);
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === pointerPaused, 'Pointer Pause from outside retains its intended action');
    await showcase.getByRole('button', { name: 'Play highlights' }).click();
    await moveOutsideShowcase(motionPage);
    await showcase.hover();
    const hovered = await currentCapability(showcase);
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === hovered, 'Hover pauses highlights');
    await moveOutsideShowcase(motionPage);
    await motionPage.clock.runFor(7100);
    check(await currentCapability(showcase) !== hovered, 'Leaving hover resumes autoplay');
    await showcase.getByRole('button', { name: 'Next capability' }).focus();
    const focused = await currentCapability(showcase);
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === focused, 'Keyboard focus stops autoplay');
    await motionPage.getByRole('link', { name: 'Start your 7-day Critter trial' }).first().focus();
    await motionPage.clock.runFor(7100);
    check(await currentCapability(showcase) === focused, 'Leaving focus does not restart autoplay');
    await showcase.getByRole('button', { name: 'Play highlights' }).click();
    await moveOutsideShowcase(motionPage);
    await motionPage.clock.runFor(100);
    await motionPage.clock.runFor(7100);
    await waitForCapabilityChange(showcase, focused);
    check(await currentCapability(showcase) !== focused, 'Explicit Play resumes after keyboard interaction');
    await showcase.getByRole('button', { name: 'Pause highlights' }).click();
    await moveOutsideShowcase(motionPage);
    const paused = await currentCapability(showcase);
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === paused, 'Explicit Pause holds current capability');
    await showcase.getByRole('button', { name: 'Play highlights' }).click();
    await moveOutsideShowcase(motionPage);
    await motionPage.locator('footer').scrollIntoViewIfNeeded();
    await motionPage.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'instant' }));
    await waitForObservedVisibility(showcase, false);
    await motionPage.clock.runFor(250);
    check(await showcase.evaluate(element => element.getBoundingClientRect().bottom < 0), 'Showcase is fully outside the viewport');
    const offscreen = await currentCapability(showcase);
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === offscreen, 'Offscreen showcase does not rotate');
    await showcase.scrollIntoViewIfNeeded();
    await waitForObservedVisibility(showcase, true);
    await moveOutsideShowcase(motionPage);
    await motionPage.clock.runFor(7100);
    check(await currentCapability(showcase) !== offscreen, 'Visible showcase resumes while playing');
    await motionPage.evaluate(() => { Object.defineProperty(document, 'visibilityState', { configurable: true, value: 'hidden' }); document.dispatchEvent(new Event('visibilitychange')); });
    const hidden = await currentCapability(showcase);
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === hidden, 'Hidden-document event pauses autoplay');
    await motionPage.evaluate(() => { delete document.visibilityState; document.dispatchEvent(new Event('visibilitychange')); });
    await motionPage.clock.runFor(7100);
    check(await currentCapability(showcase) !== hidden, 'Visible-document event resumes while playing');
    await motionPage.emulateMedia({ reducedMotion: 'reduce' });
    await showcase.getByRole('button', { name: 'Play highlights' }).waitFor();
    const reduced = await currentCapability(showcase);
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === reduced, 'Enabling reduced motion stops autoplay');
    await motionPage.reload();
    await showcase.getByRole('button', { name: 'Play highlights' }).waitFor();
    await motionPage.clock.runFor(15000);
    check(await currentCapability(showcase) === 'Show Snapshot', 'Reduced-motion preference never auto-starts');
    await motionPage.close();
    }
    const touchPage = await browser.newPage({ viewport: { width: 390, height: 1000 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
    await isolate(touchPage);
    await touchPage.clock.install();
    await touchPage.goto(origin + '/ttp');
    const touchShowcase = touchPage.getByRole('region', { name: 'Explore Critter capabilities' });
    await touchShowcase.getByRole('button', { name: 'Play highlights' }).waitFor();
    await touchShowcase.scrollIntoViewIfNeeded();
    await touchShowcase.getByRole('button', { name: 'Play highlights' }).tap();
    await touchPage.clock.runFor(100);
    await touchPage.clock.runFor(7100);
    await waitForCapabilityChange(touchShowcase, 'Show Snapshot');
    check(await currentCapability(touchShowcase) === 'Show Journey', 'Touch Play advances without sticky compatibility hover');
    await touchShowcase.getByRole('button', { name: 'Pause highlights' }).tap();
    const touchPaused = await currentCapability(touchShowcase);
    await touchPage.clock.runFor(15000);
    check(await currentCapability(touchShowcase) === touchPaused, 'Touch Pause holds current capability');
    await touchPage.close();
    console.log('Public website browser checks: ' + checks + ' passed. Captures: ' + artifacts);
  } finally { await browser.close(); }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
