const puppeteer = require("puppeteer");
let page;
console.log("Before");
const browserOpenpromise = puppeteer.launch({
    headless: false,
    slowMo: true,
    defaultViewport: null,
    args:["--start-maximized"]
    });
browserOpenpromise
     .then(function (browser){
        //console.log("Browser opened");
        //currently open tabs
        const pagesArrpromise = browser.pages();
        return pagesArrpromise;
      })
       .then(function (browserPages){
         page=browserPages[0];
         let gotoPromise = page.goto("https://www.google.com/");
         return gotoPromise;
      })
      .then(function (){
          //waiting for the element to appear on the page
          let elementWaitPromise = page.waitForSelector("input[type='text']",{visible: true});
          return elementWaitPromise;
      })
      .then(function(){
         //console.log("Reached google home page");
         // type any element on that page -> selector
         let keysWillBeSendPromise = page.type("input[type='text']","pepcoding");
         return keysWillBeSendPromise;
       })
       .then(function(){
           //page.keyboard to type special characters
           let enterWillBePressed = page.keyboard.press("Enter");
           return enterWillBePressed;
       }).then(function (){
           let elementWaitpromise = page.waitForSelector("h3.LC20lb.DKV0Md",{visible: true});
           return elementWaitpromise;
       }).then(function (){
           //mouse
           let keysWillBeSendPromise = page.click("h3.LC20lb.DKV0Md");
           return keysWillBeSendPromise;
       })
       .catch(function (err){
           console.log(err);
       })
//console.log("After");