const https = require('https')

/*const data = JSON.stringify({
  "x-token": "",
  "_token": "ZulBfRj0Ufu6iTwyxQNfYkx1vGaQ2Ak1jYTbR2Qe"
  
})

const options = {
  hostname: 'ouo.io',
  port: 443,
  path: '/xreallcygo/FGGWvJ',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()
*/
const puppeteer = require('puppeteer');
(async () => {
const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Allows you to intercept a request; must appear before
    // your first page.goto()
    await page.setRequestInterception(true);

    // Request intercept handler... will be triggered with 
    // each page.goto() statement
    page.on('request', interceptedRequest => {

        // Here, is where you change the request method and 
        // add your post data
        var data = {
            'method': 'POST',
            'postData': '_token=ZulBfRj0Ufu6iTwyxQNfYkx1vGaQ2Ak1jYTbR2Qe&x-token='
        };

        // Request modified... finish sending! 
        interceptedRequest.continue(data);
    });

    // Navigate, trigger the intercept, and resolve the response
    const response = await page.goto('https://ouo.io/xreallcygo/FGGWvJ');     
    const responseBody = await response.text();
    console.log(responseBody);

    // Close the browser - done! 
    await browser.close();

})();
