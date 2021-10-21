'use strict';
const cheerio = require("cheerio");
const request = require('request');
let ip = [];
let port = [];

request("https://us-proxy.org/", function (error, response, html){
    if(!error && response.statusCode == 200){
      const $ = cheerio.load(html);
      $("td:nth-child(1)").each(function (index, value){
        ip[index] = $(this).text();
      });
      $("td:nth-child(2)").each(function (index, value){
        port[index] = $(this).text();
      });

    }else{
      console.log("Error loading proxy, please try again");
    }
    ip.join(",");
    port.join(",");
    console.log("IP Address:"+ip+"Port Number:"+port);

});
let random = Math.floor(Math.random() * 100);
let proxy = 'http://${ip[random]}:${port[random]}'

exports.myProxy = function () {
    return proxy;
  };
  