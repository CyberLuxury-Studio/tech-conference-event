const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.goto('http://localhost:3000');
    // Wait for network idle to ensure everything renders properly
    await page.waitForLoadState('networkidle');

    // Check if hero exists
    const heroContent = await page.textContent('h1');
    console.log('Hero text:', heroContent);

    // Check if new components exist
    const terminalText = await page.textContent('.text-blue-400');
    console.log('Terminal text sample:', terminalText);

    await page.screenshot({ path: 'frontend_screenshot.png', fullPage: true });
    console.log('Screenshot saved to frontend_screenshot.png');
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await browser.close();
  }
})();
