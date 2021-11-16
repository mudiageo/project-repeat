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
            "--incognito",
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ],
    });
//Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36');

    await page.goto('https://ouo.io/FGGWvJ',  {"waitUntil" : "domcontentloaded", timeout: 0});
 //  const navigationPromise = await page.waitForNavigation({waitUntil: "domcontentloaded", timeout: 0});
  var context = await page;//.waitForSelector('#btn-main');//, {timeout: 0});
  await page.waitFor(5000);
                await console.log('gugohb3');
                
//await page.waitForNavigation({waitUntil: "domcontentloaded", timeout: 40000});
                await context.click('#btn-main');
                
                await console.log('gugohb5');
 await page.waitFor(5000);
                  //await navigationPromise;
console.log('gugohb5');
await context.click('#btn-main');
           await page.waitFor(5000);
         
               
    await browser.close();
                }
        catch(e){
                        console.log('38387'+e);
                        }
})();



var task = cron.schedule('*/20 * * * * *', () => {

 

(async () => {
        try{
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            "--incognito",
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ],
    });

    const page = await browser.newPage();
    await page.goto('https://ouo.io/FGGWvJ',  {"waitUntil" : "networkidle0", timeout: 0});
 //  const navigationPromise = await page.waitForNavigation({waitUntil: "domcontentloaded", timeout: 0});
  var context = await page;//.waitForSelector('#btn-main');//, {timeout: 0});
  await page.waitFor(5000);
                console.log('gugohb3');
                   //await navigationPromise;

                await context.click('#btn-main');
                console.log('gugohb5');
 await page.waitFor(5000);
                  //await navigationPromise;
console.log('gugohb5');
await context.click('#btn-main');
           await page.waitFor(5000);
         
               
    await browser.close();
                }
        catch(e){
                        console.log('38387'+e);
                        }
})();


});
