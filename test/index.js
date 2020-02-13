//@ts-check
const playwright = require("playwright");

async function run(name, args) {
    console.log('--------------------------------', name)
    const browser = await playwright.chromium.launch({ dumpio: true, args });
    const context = await browser.newContext();
    const page = await context.newPage('http://example.com');

    const dims = await page.evaluate(() => {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        }
    })
    console.log(name, dims);
    await browser.close();
}

(async () => {
    await run('chromium', ['--no-sandbox']);
    await run('webkit', []);
    await run('firefox', []);
})();