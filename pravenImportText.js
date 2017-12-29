 this.When(/^User registers within the app$/, {retry: 2}, (table) => {
    let user = table.rowsHash();

    if (!user.email) {
      const userData = newUserGenerator.valid.new[0];
      userData.zip = user.zip || userData.zip;
      user = userData;
    }

    browser.params.featureContext.registeredUser = user;
    console.log('User with email: ' + user.email + ' will be created.');
    registrationPage.fillForm(user);
    registrationPage.submit();
  });
   





  fillMySizeFields: {
    value: function () {
      const mySizeData = browser.params.featureContext.mySizedetails;
      Object.keys(i18n.mySize.attributes).forEach((item) => {
        if(item === 'cupSize') {
          this.mySizeFieldCupSize(i18n.mySize.attributes[item], 1).selectByValue(mySizeData[item][0]);
          this.mySizeFieldCupSize(i18n.mySize.attributes[item], 2).selectByValue(mySizeData[item][1]);
        } else {
          this.mySizeFields(i18n.mySize.attributes[item]).setValue(mySizeData[item]);
        }
      });



    this.paymentMethod.waitForVisible();
        expect(this.paymentMethod.getAttribute('innerText')).to.include(i18n.paymentMethod[paymentMethod]);
      }




       When User adds a new credit card
     | type            | creditCard       |
     | cardNumber      | 4484500000000005 |
     | cardType        | visa             |
     | expirationMonth | 5                |
     | expirationYear  | 2020             |
     | cvv             | 123              |
     | cardHolder      | Uniqlo           |




   this.When(/^User adds a new credit card( and saves it for later usage)*$/, (saveCard, table) => {
   let creditcard = table.rowsHash();
   orderPaymentPage.fillCreditCardForm(creditcard);
   if (saveCard) {
     orderPaymentPage.saveCreditCardInformation();
   }

   browser.params.featureContext.paymentMethods.push(creditcard);
 });


 fillCreditCardForm: {
   value: function (creditCardDetails) {
     this.cardNumber.waitForEnabled();
     this.cardNumber.setValue(creditCardDetails.cardNumber);
     this.expiryMonth.selectByValue(creditCardDetails.expirationMonth);
     this.expiryYear.selectByValue(creditCardDetails.expirationYear);
     this.cvv.setValue(creditCardDetails.cvv);
     this.cardHolder.setValue(creditCardDetails.cardHolder);
   }
 },

 
  saveCreditCardInformation: {
   value: function () {
     if (this.saveCardCheckbox.isEnabled === false) {
       this.saveCardCheckbox.click();
       browser.pause(1000); // TRIGGER AN API CALL}
     }
   }
 },



  dismissMergingAlertButton: {get: function () { return browser.element('//div[contains(@class,"alertBox")]//button[contains(@class,"alertButton")]');}},