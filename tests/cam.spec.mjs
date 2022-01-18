import { test } from '@playwright/test';

test.describe.serial('Camera Test', () => {
    let page;

    test.beforeAll(async({ browser }) => {

        const context = await browser.newContext();
        await context.grantPermissions(['camera']);
        page = await context.newPage();
        await page.goto("https://www.onlinemictest.com/webcam-test/");

    });

    test.afterAll(async() => {
        await page.close();
    })

    test('Camera Permissions', async() => {
        let webCamStart = "[id='webcam-start']";
        await page.isVisible(webCamStart);
        await page.click(webCamStart);
    });

})