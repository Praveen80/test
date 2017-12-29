let examples = require('../functions/test2.js');


module.exports = function () {

  this.Given(/^User goes to the url$/, () => {
    browser.url('http://test2.uniqlo.com/jp/store/goods/168884/');
  });
  this.Then(/^User select a product$/,() => {  
   examples.addToCart();
  });
this.When(/^User add product to cart$/,() => {  
   examples.addToCartButton();
  });

this.When(/^User goes to the  cart url$/,() => {  
   examples.goToCart();
   // var source = browser.getSource();
   // console.log(source);
   browser.pause(20000);
   var source = browser.getHTML('#content',true);
   console.log(source);
  });
  // this.Then(/^User goes to the  cart url$/,() => {  
  //  browser.url('http://test2.uniqlo.com/jp/sp/cart');
  //  var source = browser.getSource();
  //  console.log(source);
  // // browser.debug();
  // });
};