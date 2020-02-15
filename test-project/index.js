//@ts-check
const playwright = require("playwright");

async function run(name, args) {
    const browser = await playwright[name].launch({ args });
    const page = await browser.newPage();
    await page.goto('http://example.com');

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
