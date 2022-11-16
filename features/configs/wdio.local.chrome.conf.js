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
            "--window-size=1920,1080", "--disable-gpu", "--disable-dev-shm-usage", "--disable-web-security", "--disable-site-isolation-trials"
          ],
          prefs: {
            "safebrowsing.enabled": false,
            "safebrowsing.disable_download_protection": true,
            "download": {
              "prompt_for_download": false,
              "directory_upgrade": true,
              "default_directory": pathToDownload
            }
          }
        }
      },
    ],
    services: ['chromedriver'],
    deviceName: 'Desktop',
    before(capabilities, specs) {
      global.specFileName = specs[0];
    }
  }
};
