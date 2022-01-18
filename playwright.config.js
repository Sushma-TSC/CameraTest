const config = {
    retries: 1,
    workers: 1,
    testDir: 'tests',
    outputDir: './test-results',
    reporter: [
        process.env.CI ? ['github'] : ['list'],
        ['html', { outputFile: 'test-results.json' }]
    ],

    use: {
        headless: true,
        video: 'on',
        trace: 'on',
        screenshot: 'on'
    },

    projects: [
        { name: 'Chromium', use: { browserName: 'chromium' } },
        { name: 'Firefox', use: { browserName: 'firefox' } },
        { name: 'WebKit', use: { browserName: 'webkit' } }
    ]
};

module.exports = config;