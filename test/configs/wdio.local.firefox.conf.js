const path = require("path");
const { config } = require("./wdio.shared.conf");

const pathToDownload = path.join(__dirname, "../", "logs/chromeDownloads");

exports.config = {
  ...config,
  ...{
    capabilities: [
      {
        // maxInstances can get overwritten per capability. So if you have an in house Selenium
        // grid with only 5 firefox instance available you can make sure that not more than
        // 5 instance gets started at a time.
        browserName: 'firefox',
        'moz:firefoxOptions': {
          // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
          args: ["--width=1920", "--height=1080"]
          // binary: '/Applications/FirefoxNightly.app/Contents/MacOS/firefox-bin'
        },
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        excludeDriverLogs: ['bugreport', 'server'],
        //
        // Parameter to ignore some or all Puppeteer default arguments
        // ignoreDefaultArgs: ['-foreground'], // set value to true to ignore all default arguments
      }
    ],
    deviceName: 'Desktop',
    before(capabilities, specs) {
      global.specFileName = specs[0];
    }
  }
};
