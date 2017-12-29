let Page = require('./page');

let DuckDuckGo = {

searchTabClick:{get: function () { return browser.element('//*[@id="search_form_input_homepage"]');}},
searchButton:{get: function () { return browser.element('//*[@id="search_button_homepage"]');}},
searchedItemMain:{get: function () { return browser.element('//*[@class="module__title"]//a');}},
heading:{get: function () { return browser.element('//*[@id="firstHeading"]');}},
link:{get: function () { return browser.element('//*[@class="module__more-at js-about-module-more-at-inline" and contains(text(), "More at Wikipedia")]');}},


search:{
     value: function() {
    this.searchTabClick.waitForEnabled();
    this.searchTabClick.setValue("Earth");
    this.searchButton.click();
}
},

searchedItem:{
     value: function() {
     this.searchedItemMain.waitForEnabled();    
     var url = browser.getUrl();
     expect(url=="https://duckduckgo.com/?q=earth&t=h_&ia=about");
}
},

clickLink:{
     value: function() {
      this.link.waitForEnabled();
      this.link.click();
     
}
},

checkSearchedItem:{
     value: function() {
     this.heading.waitForEnabled();
     expect(this.heading=="Earth");
}
},
};

module.exports = Object.create(Page,DuckDuckGo);