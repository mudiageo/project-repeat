var chromeOptions = {
        headless: true,
        args: [
            "--incognito",
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ],
    };
  await page.goto('https://ouo.io/FGGWvJ', {waitUntil: 'networkidle2'});*/
  const cron = require('node-cron');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();

    await page.goto('https://ouo.io/FGGWvJ',  {"waitUntil" : "networkidle0"});
    await page.waitFor(5000);

    await page.click('#btn-main');
   await page.waitFor(5000);

    await page.click('#btn-main');

    await page.waitFor(5000);


    await browser.close();
})();

var task = cron.schedule('*/20 * * * * *', () => {
 (async () => {
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();

    await page.goto('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin',  {"waitUntil" : "networkidle0"});
    await page.waitFor(5000);

    await page.click('#btn-main');
   await page.waitFor(5000);

    await page.click('#btn-main');

    await page.waitFor(5000);


    await browser.close();
})();
});
  
