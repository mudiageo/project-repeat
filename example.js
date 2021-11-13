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
const puppeteer = require('puppeteer');

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
    await page.waitFor(5000);

    await page.click('#btn-main');
   await page.waitFor(5000);

    await page.click('#btn-main');

    await page.waitFor(5000);
                
await page.click('#btn-main');
   await page.waitFor(5000);

    await page.click('#btn-main');

    await page.waitFor(5000);
                
            await page.click('#btn-main');
   await page.waitFor(5000);

    await page.click('#btn-main');

    await page.waitFor(5000);    

    await browser.close();
                }
        catch(e){
                        console.log('38387'+e);
                        }
})();

//var task = cron.schedule('*/20 * * * * *', () => {
 
