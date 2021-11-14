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
                console.log('gugohb1');
    const page = await browser.newPage();
console.log('gugohb2');
    await page.goto('https://ouo.io/FGGWvJ',  {"waitUntil" : "networkidle0"});
  console.log('gugohb2');
 //  const navigationPromise = await page.waitForNavigation({waitUntil: "domcontentloaded", timeout: 0});
 // var context = await page.waitForSelector('#btn-main', {timeout: 0});
  await page.waitFor(5000);
                console.log('gugohb3');
                   //await navigationPromise;
console.log('gugohb4');
                await context.click('#btn-main');
                console.log('gugohb5');
 await page.waitFor(5000);
                  await navigationPromise;
console.log('gugohb1');
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
 
