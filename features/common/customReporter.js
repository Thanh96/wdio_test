import WDIOReporter from "@wdio/reporter";
let runningTime, startTime, endTime;

module.exports = class TimeReporter extends WDIOReporter {
  constructor(options) {
    /*
     * make reporter to write to the output stream by default
     */
    options = Object.assign(options, { stdout: true });
    super(options);
  }
  onTestStart(test) {
    const today = new Date();
    startTime = today.getTime();
  }
  onTestEnd(test) {
    const today = new Date();
    endTime = today.getTime();
    runningTime = parseInt((endTime - startTime) / 1000);
    if (runningTime > 30) {
      this.write(`- ${test.fullTitle} seem take a long time more than 30s \n`);
      this.write(`- ${test.fullTitle} has running time is: ${runningTime}s \n`);
    }
  }
};
