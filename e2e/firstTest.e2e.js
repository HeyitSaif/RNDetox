const detox = require('detox');

describe('E2E', () => {
  beforeAll(async () => {
    await detox.init();
    await detox.device.launchApp({newInstance: true});
  });

  it('should have Home Screen with Hello text ', async () => {
    await expect(element(by.id('HomeScreen'))).toBeVisible();
    await expect(element(by.text('Hello'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('Screen-NOTIF')).tap();
    await expect(element(by.id('NotIfScreen'))).toBeVisible();
    await expect(element(by.text('World'))).toBeVisible();
  });
});
