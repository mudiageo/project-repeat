const puppeteer = require('puppeteer');
const cron = require('node-cron');
(async () => {
  try{

    const chromeOptions = {
        headless: true,
        defaultViewport: null,
        args: [
            "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"
        ],
    };
    var browser = await puppeteer.launch(chromeOptions);
    var page = await browser.newPage();
    
    await page.goto('https://ouo.io/FGGWvJ');
    await page.click('#btn-main');
    await page.waitFor(5000);
  
  
    await page.click('#btn-main')
    await page.waitFor(5000);
    await page.click('#btn-main')
    await page.waitFor(5000);
    await page.click('#btn-main')
    await page.waitFor(5000);
    await browser.close(); 
  }    
  catch(err) {
    console.log(err);
  }
  
  })();
var task = cron.schedule('*/20 * * * * *', () => {
  (async () => {
 
 try{

    const chromeOptions = {
        headless: true,
        defaultViewport: null,
        args: [
            "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"
        ],
    };
    var browser = await puppeteer.launch(chromeOptions);
    var page = await browser.newPage();

    
    await page.goto('https://ouo.io/FGGWvJ');
    await page.click('#btn-main');
    await page.waitFor(5000);
  
  
    await page.click('#btn-main')
    await page.waitFor(5000);
    await page.click('#btn-main')
    await page.waitFor(5000);
    await page.click('#btn-main')
    await page.waitFor(5000);
    await browser.close(); 
      
  
}
  catch(err) {
    console.log(err);
  }
})();
 

});
