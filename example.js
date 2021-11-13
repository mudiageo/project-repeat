const puppeteer = require('puppeteer');
const cron = require('node-cron');
(async () => {
  try{

    var chromeOptions = {
        headless: false,
        args: [
            "--incognito",
            "--no-sandbox"
        ],
    };
    var browser = await puppeteer.launch(chromeOptions);
    var page = await browser.newPage();
 //await page.setDefaultNavigationTimeout(0); 
    await page.goto('https://ouo.io/FGGWvJ', {
    waitUntil: 'load',
    // Remove the timeout
    timeout: 0
});
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
var task = cron.schedule('*/20 */3 * * * *', () => {
  (async () => {
 
 try{

    var chromeOptions = {
        headless: false,
        args: [
            "--incognito",
            "--no-sandbox"
        ],
    };
    
    var browser = await puppeteer.launch(chromeOptions);
    var page = await browser.newPage();

    
    await page.goto('https://ouo.io/FGGWvJ', {
    waitUntil: 'load',
    // Remove the timeout
    timeout: 0
});
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
