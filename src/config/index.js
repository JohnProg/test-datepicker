exports.appium = {
  host: 'localhost',
  port: 4723
}

const androidApp =
  'https://s3-ap-southeast-1.amazonaws.com/testdatepicker/TestApplication.apk.zip'
const iosApp =
  'https://s3-ap-southeast-1.amazonaws.com/testdatepicker/TestApplication.app.zip'

exports.ios10 = {
  platformName: 'iOS',
  platformVersion: '10.3',
  deviceName: 'iPhone Simulator',
  app: iosApp
}

exports.android18 = {
  platformName: 'Android',
  platformVersion: '4.3',
  deviceName: 'Android Emulator',
  app: androidApp
}

exports.android22 = {
  platformName: 'Android',
  platformVersion: '5.1',
  deviceName: 'Android Emulator',
  app: androidApp
}

exports.android23 = {
  platformName: 'Android',
  platformVersion: '6.0',
  deviceName: 'Android Emulator',
  app: androidApp
}
