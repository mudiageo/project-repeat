const https = require('https')

const data = JSON.stringify({
  x-token: "",
  _token: "ZulBfRj0Ufu6iTwyxQNfYkx1vGaQ2Ak1jYTbR2Qe"
  
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
