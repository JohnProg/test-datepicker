const wd = require('wd')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const config = require('../config')

chaiAsPromised.transferPromiseness = wd.transferPromiseness
chai.use(chaiAsPromised)
chai.should()

describe('iOS 10 DatePicker', function() {
  let driver
  this.timeout(300000)

  before(() => {
    driver = wd.promiseChainRemote(config.appium)

    return driver.init(config.ios10)
  })

  after(() => {
    return driver.quit()
  })

  it('should have a DatePicker', () => {
    return driver
      .elementsByClassName('android.widget.DatePicker')
      .should.eventually.exist.elementsByClassName('XCUIElementTypePickerWheel')
      .then(els => {
        els.length.should.equal(4)
        return els
      })
      .first()
      .getAttribute('value')
      .should.become('Today')
  })

  it('should set time 4:04 AM', () => {
    return driver
      .elementsByClassName('XCUIElementTypePickerWheel')
      .second()
      .sendKeys('4')
      .getAttribute('value')
      .should.become('4 o’clock')
      .elementsByClassName('XCUIElementTypePickerWheel')
      .third()
      .sendKeys('04')
      .getAttribute('value')
      .should.become('04 minutes')
      .elementsByClassName('XCUIElementTypePickerWheel')
      .last()
      .sendKeys('AM')
      .getAttribute('value')
      .should.become('AM ')
  })

  it('should select next 2 days', () => {
    return driver
      .elementsByClassName('XCUIElementTypePickerWheel')
      .first()
      .then(picker => {
        return driver.execute('mobile: selectPickerWheelValue', {
          element: picker,
          order: 'next'
        })
      })
      .sleep(1000)
  })

  it('should select a random day', () => {
    return driver
      .elementsByClassName('XCUIElementTypePickerWheel')
      .first()
      .then(picker =>
        driver.execute('mobile: scroll', {
          element: picker,
          direction: 'down',
          predicateString: 'Thu Jul 26'
        })
      )
      .sleep(2000)
  })
})
