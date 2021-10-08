 const cron = require('node-cron');
 const puppeteer = require('puppeteer');
 (async () => {
//  const browser = await puppeteer.launch({ headless: false }); // default is true

  const browser = await puppeteer.launch();
  var page = await browser.newPage();
  await page.goto('https://ouo.io/FGGWvJ');
  await page.waitFor(5000);
  console.log('try');
  await page.click('#btn-main');
  await page.waitFor(5000);
  await page.click('#btn-main') ;
  await page.waitFor(5000);
  await page.click('#btn-main') ;
  //await page.screenshot({ path: 'example.png' });
  await browser.close(); 
 })();
var task = cron.schedule('*/40 */2 * * * *', () => {
   (async () => {
      
    //const browser = await puppeteer.launch({ headless: false }); // default is true

    const browser = await puppeteer.launch();
    var page = await browser.newPage();
    await page.goto('https://ouo.io/FGGWvJ');
    await page.waitFor(5000);
    console.log('try');
    await page.click('#btn-main');
    await page.waitFor(5000);
    await page.click('#btn-main') ;
    await page.waitFor(5000);
    await page.click('#btn-main') ;
    //await page.screenshot({ path: 'example.png' });
    await browser.close();
});
});
//await new Promise(resolve => setTimeout(resolve, 5000));