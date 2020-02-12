//@ts-check
const playwright = require("playwright");

(async () => {
    const browser = await playwright.chromium.launch({ dumpio: true, args: ['--no-sandbox']});
    const context = await browser.newContext();
    const page = await context.newPage('http://example.com');

    const dims = await page.evaluate(() => {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        }
    })
    console.log(dims);
    await browser.close();
})();