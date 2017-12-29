let Page = require('./page');

let DuckDuckGo = {

clickColor:{get: function () { return browser.element('//*[@id="size-id"]/div[2]/div/div/span[1]');}},
size:{get: function () { return browser.element('//*[@class="uni-product-sizes-fields-container"] //span[@class="uni-product-size-chart"][2]');}},
length:{get: function () { return browser.element('//*[@class="uni-product-lengths-container"] //span[@class="uni-product-size-chart"][1]');}},
button:{get: function () { return browser.element('//*[@class="uni-product-add-to-cart-wishlist-container add-to-cart"]//button');}},
goToCartButton:{get: function () { return browser.element('//*[@class="cart-button2"]');}},
//*[@id="size-id"]/div[5]/div[6]/div/button



addToCart:{
     value: function() {
    this.clickColor.waitForEnabled();
    this.clickColor.click();
    this.size.waitForEnabled();
    this.size.click();
    this.length.waitForEnabled();
    this.length.click();
    browser.pause(2000);
    

}
},

addToCartButton:{
    value: function() {
    this.button.waitForEnabled();
    browser.pause(2000);
    this.button.click();
    browser.pause(6000);
    }
},

goToCart:{
    value: function() {
    this.goToCartButton.waitForEnabled();
    browser.pause(2000);
    this.goToCartButton.click();
    browser.pause(6000);
    }
},
//*[@class="cart-button2"]
};

module.exports = Object.create(Page,DuckDuckGo);