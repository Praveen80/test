/**
 *
 * wdio.conf.chrome.js
 * Test configuration file used for iOS test environment
 *
 */
let merge = require('deepmerge');
let wdioConfBase = require('./wdio.conf.base.js');

exports.config = merge(wdioConfBase.config, {
services: ['selenium-standalone', 'appium'],
appium: {
    args: {
    address: '127.0.0.1',
    commandTimeout: '7200',
    sessionOverride: true,
    debugLogSpacing: true,
    showIosLog: true,
    nativeInstrumentsLib: true,
    isolateSimDevice: true,
   
    }
},
port: 4723,
  //capabilities: [{
    //browserName:   'internet explorer',
    //version:'11.0',
  //}],

  // capabilities: [{
  //  browserName:   'chrome',
  //  chromeOptions: {
  //    args: ['--reduce-security-for-testing', '--window-size=350,730'],
  //    mobileEmulation: {
  //      deviceName: 'iPhone 5'
  //    }
  //  }
  //  }],

//   capabilities:[{
//     //address: '127.0.0.1',
//     //port: '4723'
//   platformName: 'iOS',
//   platformVersion: '10.3',
//   browserName: 'safari',
//   deviceName: 'iPhone 6',
//   udid:'bfdd26e4bae2c9b2634533f0dd6756ec58d17d50',
//   bundleId: 'com.safarilauncherQB.com',
//   sessionOverride: true,
//   debugLogSpacing: true,
//   nativeInstrumentsLib: true,
//   isolateSimDevice: true,
// }],

 // capabilities: [
 //        {
 //            automationName: "appium",
 //            browserName: 'iOS',
 //            commandTimeout: '7200',
 //            sessionOverride: true,
 //            debugLogSpacing: true,
 //            platformVersion: '10.3',
 //            platformName: 'iOS',
 //            showIosLog: true,
 //            deviceName: 'iPhone 6',
 //            nativeInstrumentsLib: true,
 //            isolateSimDevice: true,
 //            autoLaunch: true,
 //            //app: '/Users/fodgerl/Library/Developer/Xcode/...../Debug-iphonesimulator/myapp.app'
 //        }
 //    ],



capabilities: [
{
        maxInstances: 1,
        browserName: 'safari',
        appiumVersion: '1.7.1',
        automationName: 'Appium',
        deviceName: 'iPhone 6',
        deviceOrientation: 'portrait',
        platformVersion: '10.3',
        udid:'bfdd26e4bae2c9b2634533f0dd6756ec58d17d50',
        bundleId: 'com.safarilauncherQB.com',
        platformName: 'iOS'
}


],



  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  before: function (capabilities, specs) {
    /**
     * Setup the Chai assertion framework
     */
    let chai = require('chai');
    global.expect = chai.expect;

    console.log('Starting Test Case: -', specs[0].replace(/^.*[\\\/]/, ''));

    let utils = require('./utilities/utils');
    utils.init();

   /** let size = {
      width: 412,
      height: 732
    };
    browser.setViewportSize(size);*/
    browser.timeouts('page load', 60000);
  }
}); 


