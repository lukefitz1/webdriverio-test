var webdriverio = require('webdriverio');
var options = {
    // headers: {
    //   Authorization: 'Basic c3RvcmVmcm9udDpwYXNzNGJsdWVhY29ybg=='
    // },
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('https://storefront:pass4blueacorn@development.oreck.com')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });