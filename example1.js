const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false }); // default is true

  //const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ouo.io/jGWIxeU');
  await page.click('#btn-main');
function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}
  delay(5000);

await page.click('#btn-main')
 delay(5000);

await page.click('#btn-main')

 // await page.screenshot({ path: 'example.png' });

  //await browser.close();
})();