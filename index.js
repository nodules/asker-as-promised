const ask = require('asker');

/**
 * @param {Object} options See http://npm.im/asker for details
 * @returns {Promise}
 */
function askerAsPromised(options) {
    return new Promise((resolve, reject) => {
        ask(options, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
}

askerAsPromised.Error = ask.Error;
askerAsPromised._asker = ask;

module.exports = askerAsPromised;
