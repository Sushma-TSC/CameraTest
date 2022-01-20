import { test } from '@playwright/test';
import { injectVideo } from '../utilities/helper.mjs'
test.describe.serial('Camera Test', () => {
    let page;

    test.beforeAll(async({ browser }) => {
        async function cursor(p) {
            await p.addInitScript(function() {
                navigator.mediaDevices.enumerateDevices = () => Promise.resolve([{ deviceId: 'blah', groupId: 'foo', kind: 'videoinput', label: '' }]);
                window.addEventListener('DOMContentLoaded', injectVideo);
            });
            return p;
        }
        const context = await browser.newContext();
        // await context.grantPermissions(['camera']);
        page = await context.newPage().then(cursor);
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