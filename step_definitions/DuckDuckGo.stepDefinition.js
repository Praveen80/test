let examples = require('../functions/DuckDuckGo.js');


module.exports = function () {

  this.Given(/^User goes to the url$/, () => {
    browser.url('https://duckduckgo.com/');
  });
  this.When(/^User searches an item$/,() => {  
   examples.search();
  });

  this.Then(/^Verify url$/,() => {  
   examples.searchedItem();
  });

  this.Given(/^User clicks on a link$/,() => {  
   examples.clickLink();
  });
  
   this.Then(/^User redirected to correct link$/,() => {  
   examples.checkSearchedItem();
  });
};