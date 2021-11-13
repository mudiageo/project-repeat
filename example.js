const puppeteer = require('puppeteer');
const cron = require('node-cron');
(async () => {
  try{

    var chromeOptions = {
        headless: true,
        args: [
            "--incognito",
            "--no-sandbox",
            "--disable-setuid-sandbox"
        ],
    };
    var browser = await puppeteer.launch(chromeOptions);
    var page = await browser.newPage();
 //await page.setDefaultNavigationTimeout(0); 
    await page.goto('https://ouo.io/FGGWvJ', {waitUntil: 'networkidle2'});
    await Promise.all([
    page.click('button[type=submit]'),
    page.waitForNavigation({waitUntil: 'networkidle2'})
]);
    await Promise.all([
    page.click('button[type=submit]'),
    page.waitForNavigation({waitUntil: 'networkidle2'})
]);
    //await page.click('#btn-main');
   /* await page.waitFor(5000);
   await page.waitForNavigation();
  
    await page.click('#btn-main');
    await page.waitFor(5000);
    await page.click('#btn-main');
    await page.waitFor(5000);
    await page.click('#btn-main');
    await page.waitFor(5000);*/
    await browser.close(); 
  }    
  catch(err) {
    console.log(err);
  }
  
  })();
var task = cron.schedule('*/20 * * * * *', () => {
  (async () => {
 
 try{

    var chromeOptions = {
        headless: true,
        args: [
            "--incognito",
            "--no-sandbox", 
            "--disable-setuid-sandbox"
        ],
    };
    
    var browser = await puppeteer.launch(chromeOptions);
    var page = await browser.newPage();

    
    await page.goto('https://ouo.io/FGGWvJ', {waitUntil: 'networkidle2'});
   await Promise.all([
    page.click('button[type=submit]'),
    page.waitForNavigation({waitUntil: 'networkidle2'})
]);
   await Promise.all([
    page.click('button[type=submit]'),
    page.waitForNavigation({waitUntil: 'networkidle2'})
]);
  /* 
    await page.click('#btn-main');
    await page.waitFor(5000);
  
  await page.waitForNavigation();
    await page.click('#btn-main');
    await page.waitFor(5000);
    await page.click('#btn-main');
    await page.waitFor(5000);
    await page.click('#btn-main');
    await page.waitFor(5000);*/
    await browser.close(); 
      
  
}
  catch(err) {
    console.log(err);
  }
})();
 

});
  
