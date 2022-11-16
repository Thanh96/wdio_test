const path = require("path");
const { config } = require("./wdio.shared.conf");

const pathToDownload = path.join(__dirname, "../", "logs/chromeDownloads");

exports.config = {
  ...config,
  ...{
    capabilities: [
      {
        maxInstances: 1,
        browserName: 'safari',
        port: 4445
      }
    ],
    deviceName: 'Desktop',
    before(capabilities, specs) {
      global.specFileName = specs[0];
      browser.maximizeWindow();
    }
  }
};
