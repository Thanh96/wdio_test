const path = require("path");
const { config } = require("./wdio.shared.conf");

const pathToDownload = path.join(__dirname, "../", "logs/chromeDownloads");

exports.config = {
  ...config,
  ...{
    capabilities: [
      {
        browserName: "chrome",
        "goog:chromeOptions": {
          headless: false,
          args: [
            "--window-size=412,846", "--disable-gpu", "--disable-dev-shm-usage", "--disable-web-security", "--disable-site-isolation-trials"
          ]
        }
      }
    ],
    deviceName: 'google3XL',
    before(capabilities, specs) {
      global.specFileName = specs[0];
    }
  }
};
