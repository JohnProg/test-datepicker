const wd = require('wd')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const config = require('../config')

chaiAsPromised.transferPromiseness = wd.transferPromiseness
chai.use(chaiAsPromised)
chai.should()

describe('Android 22 - DatePicker', function() {
  let driver
  this.timeout(300000)

  before(() => {
    driver = wd.promiseChainRemote(config.appium)

    return driver.init(config.android22)
  })

  after(() => {
    return driver.quit()
  })

  it('should exist', () => {
    return driver.elementsByClassName('android.widget.DatePicker').should
      .eventually.exist
  })

  it('should set date 10', () => {
    return (
      driver
        //.elementById('android:id/month_view')
        //.should.eventually.exist.elementByXPath("//android.view.View[@text='10']")
        //.click()
        .elementByXPath("//android.view.View[@index='9']")
        .getAttribute('enabled')
        .should.become('true')
        .sleep(2000)
    )
  })

  //it('should move to next month', () => {
  //  return driver
  //    .elementById('android:id/prev')
  //    .should.eventually.exist.click()
  //    .sleep(2000)
  //})

  //it('should move to previous month', () => {
  //  return driver
  //    .elementById('android:id/prev')
  //    .should.eventually.exist.click()
  //    .sleep(2000)
  //})

  it('should select year 2015', () => {
    return (
      driver
        .elementById('android:id/date_picker_year')
        .should.eventually.exist.click()
        //.elementById('android:id/date_picker_year_picker')
        .elementByAndroidUIAutomator(
          'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("' +
            2015 +
            '"))'
        )
        .sleep(2000)
        .click()
        .elementById('android:id/date_picker_year')
        .text()
        .should.become('2015')
        .sleep(2000)
    )
  })
})
