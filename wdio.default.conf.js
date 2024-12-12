
const config = {
    baseURL: 'https://webdriver.io/',

    specs: [
        './test.spec.js'
    ],

    sync: true,
    coloredLogs: true,
    framework: 'mocha',
    reporters: [
        'spec'
    ],
    mochaOpts: {
        ui: 'bdd'
    },
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'info',
    logLevels: {
        webdriver: 'warn'
    }
};


export {config};
