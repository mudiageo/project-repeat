const puppeteer = require('puppeteer');
const cron = require('node-cron');
//const proxy = require('./myproxy');
(async () => {
  //var myProxy = '--proxy-server='+proxy.myProxy;
  var browser = await puppeteer.launch({ headless: false }); // default is true
  //var browser = await puppeteer.launch();
  var page = await browser.newPage();
//  await page.authenticate();
await page.goto('https://ouo.io/FGGWvJ').catch(error => console.log(error.message));
await page.waitFor(5000).catch(error => console.log(error.message));

await page.click('#btn-main');
await page.waitFor(5000).catch(error => console.log(error.message));
await page.click('#btn-main') ;
await page.waitFor(5000).catch(error => console.log(error.message));
await page.click('#btn-main') ;
await page.waitFor(5000).catch(error => console.log(error.message));
await page.click('#btn-main') ;

//await page.screenshot({ path: 'example.png' });
await browser.close();
})();
var task = cron.schedule('*/40 */2 * * * *', () => {
  (async () => {
  //  var myProxy = '--proxy-server='+proxy.myProxy;
    //var browser = await puppeteer.launch({ headless: false }); // default is true
    var browser = await puppeteer.launch();
    var page = await browser.newPage();
  //  await page.authenticate();
    
    await page.goto('https://ouo.io/FGGWvJ').catch(error => console.log(error.message));
    await page.waitFor(5000).catch(error => console.log(error.message));
    await page.click('#btn-main');
    await page.waitFor(5000).catch(error => console.log(error.message));
    await page.click('#btn-main') ;
    await page.waitFor(5000).catch(error => console.log(error.message));
    await page.click('#btn-main') ;
    await page.waitFor(5000).catch(error => console.log(error.message));
    await page.click('#btn-main') ;
    await browser.close().catch(error => console.log(error.message));
    
  })();
});
