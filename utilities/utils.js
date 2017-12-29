/*
 Utility functions
*/

const commonUtilities = {
};

/**
 * Converts the obove object to Custom Command
 */
module.exports = {
  init: function () {
    Object.keys(commonUtilities).forEach(function (key) {
      browser.addCommand(key, commonUtilities[key]);
      });
    }
};
