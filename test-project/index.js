//@ts-check
const playwright = require("playwright");

async function run(name, args) {
    const browser = await playwright[name].launch({ dumpio: true, args });
    const context = await browser.newContext();
    const page = await context.newPage('http://example.com');

    console.log(name, await page.evaluate(() => {
        return {
            w: document.documentElement.clientWidth,
            h: document.documentElement.clientHeight
        }
    }))
    await browser.close();
}

(async () => {
    await run('chromium', ['--no-sandbox']);
    await run('webkit', []);
    await run('firefox', []);
})();
