/*var chromeOptions = {
        headless: true,
        args: [
            "--incognito",
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ],
    };
  await page.goto('https://ouo.io/FGGWvJ', {waitUntil: 'networkidle2'});*/
  const cron = require('node-cron');
//const puppeteer = require('puppeteer');
const puppeteer = require("puppeteer-extra");

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));



(async () => {
        try{
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ],
    });
    const page = await browser.newPage();

    await page.goto('https://ouo.io/FGGWvJ',  {"waitUntil" : "networkidle0"});
     const navigationPromise = page.waitForNavigation({waitUntil: "domcontentloaded"});
  
  await page.waitFor(5000);
                var context = await page.waitForSelector('#btn-main');
                  await navigationPromise;

                await context.click('#btn-main');
 await page.waitFor(5000);
                  await navigationPromise;

                 await context.click('#btn-main');
           await page.waitFor(5000);
                  await navigationPromise;

                 await context.click('#btn-main');
               
await page.waitFor(5000);
                  await navigationPromise;

                 await context.click('#btn-main');
           await page.waitFor(5000);
                  await navigationPromise;

                 await context.click('#btn-main');
               
             await page.waitFor(5000);
                  await navigationPromise;

                 await context.click('#btn-main');
  await navigationPromise;
               
    await browser.close();
                }
        catch(e){
                        console.log('38387'+e);
                        }
})();

//var task = cron.schedule('*/20 * * * * *', () => {
 
