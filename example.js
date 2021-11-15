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



//var task = cron.schedule('*/20 * * * * *', () => {

 

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
