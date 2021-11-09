const puppeteer = require('puppeteer');
const cron = require('node-cron');
//const proxy = require('./myproxy');
(async () => {
  try{
//  var myProxy = '--proxy-server='+proxy.myProxy;
    //var browser = await puppeteer.launch({ headless: false }); // default is true
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
  //  await page.authenticate();
    
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
      //  var myProxy = '--proxy-server='+proxy.myProxy;
    //var browser = await puppeteer.launch({ headless: false }); // default is true
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
  //  await page.authenticate();
  //await page.goto('file:///C:/xampp1/htdocs/npm/index.html');
    
    await page.goto('https://ouo.io/FGGWvJ');
    await page.click('#btn-main');
    await page.waitFor(5000);
  
  
    await page.click('#button2')
    await page.waitFor(5000);
    await page.click('#button2')
    await page.waitFor(5000);
    await page.click('#button2')
    await page.waitFor(5000);
    await browser.close(); 
      
  
}
  catch(err) {
    console.log(err);
  }
})();
 

});

