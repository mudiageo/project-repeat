const puppeteer = require('puppeteer');
const cron = require('node-cron');
const proxy = require('./myproxy');
(async () => {
  var myProxy = '--proxy-server='+proxy.myProxy;
  //var browser = await puppeteer.launch({ headless: false }); // default is true
  var browser = await puppeteer.launch({args: [myProxy]});
  var page = await browser.newPage();
  await page.authenticate();
await page.goto('https://ouo.io/FGGWvJ');
await page.waitFor(5000);
await page.click('#btn-main');
await page.waitFor(5000);
await page.click('#btn-main') ;
await page.waitFor(5000);
await page.click('#btn-main') ;
await page.waitFor(5000);
    await page.click('#btn-main') ;
    await page.waitFor(5000);
    await page.click('#btn-main') ;
    await page.waitFor(5000);
await page.click('#btn-main') ;

//await page.screenshot({ path: 'example.png' });
await browser.close();
})();
var task = cron.schedule('*/40 */2 * * * *', () => {
  (async () => {
    var myProxy = '--proxy-server='+proxy.myProxy;
    //var browser = await puppeteer.launch({ headless: false }); // default is true
    var browser = await puppeteer.launch({args: [myProxy]});
    var page = await browser.newPage();
    await page.authenticate();
    
    await page.goto('https://ouo.io/FGGWvJ');
    await page.waitFor(5000);
    await page.click('#btn-main');
    await page.waitFor(5000);
    await page.click('#btn-main') ;
    await page.waitFor(5000);
    await page.click('#btn-main') ;
    await page.waitFor(5000);
    await page.click('#btn-main') ;
    await page.waitFor(5000);
    await page.click('#btn-main') ;
    await page.waitFor(5000);
    await page.click('#btn-main') ;
    await browser.close();
    
  })();
});
