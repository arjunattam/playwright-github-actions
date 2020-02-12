const playwright = require('playwright');

const args = {
    chromium: ["--no-sandbox", "--disable-setuid-sandbox"],
    firefox: [],
    webkit: []
}

(async () => {
    for (const browserType of ['chromium', 'firefox', 'webkit']) {
        console.log('attempting', browserType)
        const browser = await playwright[browserType].launch({
            dumpio: true,
            args: args[browserType] 
        });

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.example.com/');
        const dimensions = await page.evaluate(() => {
            return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio
            }
        })
        console.log(dimensions);

        await browser.close();
    }
})();