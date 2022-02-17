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
const randomUseragent = require('random-useragent');

const url = [
   "https://ouo.io/FGGWvJ",
   "https://ouo.io/tOpvPmW",
   "https://ouo.io/GUzwgX",
   "https://ouo.io/TmNXRkf",
   "https://ouo.io/OKMtoY",
   "https://ouo.io/2Qao9n",
   "https://ouo.io/THmmDw",
   "https://ouo.io/0SXx3H",
   "https://ouo.io/gg3L5v",
   "https://ouo.io/6jFmTy",
   "https://ouo.io/35RVtCk"
];

let rand = Math.floor(Math.random() * 12);

(async () => {
        try{
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            "--incognito",
            "--no-sandbox",
            "--disable-setuid-sandbox"
 	]
    });
// get existing tab/page (first item in the array)
var [page] = await browser.pages();
 //  const navigationPromise = await page.waitForNavigation({waitUntil: "domcontentloaded", timeout: 0});
// await page.setUserAgent(randomUseragent.getRandom());
   // const page = await browser.newPage();
           await page.goto(url[rand],  {"waitUntil" : "networkidle0", timeout: 0});
           var context = await page.waitForSelector('#btn-main'), {timeout: 0});
           await page.waitFor(1000);
           await console.log('Page Opened 1 sec ago');
         
           await context.click('#btn-main');
           await console.log('First Button clicked');
           await page.waitFor(6000);
           await console.log('6 sec interval');
           await page.click('#btn-main');
           await page.waitFor(1000);
           await console.log('Second Button Clicked');
        
               
           await browser.close();
                }
        catch(e){
              await console.log('38387'+e);
             if (typeof browser !== 'undefined') {
                 await browser.close();
             }
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
 	]
    });
// get existing tab/page (first item in the array)
var [page] = await browser.pages();
 //  const navigationPromise = await page.waitForNavigation({waitUntil: "domcontentloaded", timeout: 0});
//await page.setUserAgent(randomUseragent.getRandom());
 
   // const page = await browser.newPage();
           await page.goto(url[rand],  {"waitUntil" : "networkidle0", timeout: 0});
           var context = await page.waitForSelector('#btn-main'), {timeout: 0});
           await page.waitFor(1000);
           await console.log('Page Opened 1 sec ago');
         
           await context.click('#btn-main');
           await console.log('First Button clicked');
           await page.waitFor(6000);
           await console.log('6 secs interval');
           await page.click('#btn-main');
           await page.waitFor(1000);
           await console.log('Button Clicked');
         
         
               
           await browser.close();
                }
        catch(e){
                        console.log('38387'+e);
          if (typeof browser !== 'undefined') {
               await browser.close();
          }
                }
})();


});
