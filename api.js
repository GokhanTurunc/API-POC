var http = require('http');

/**
 * @param {Function} fn
 */
module.exports.getBestSelling = function(fn) {
    getApi('bestSelling', 'itemsPerPage=10', fn);
};


/**
 * @param {Function} fn
 */
module.exports.getForgeryToken = function(fn) {
    getApi('tokenGenerate', 'deviceId=13t8t2ge652az1t7h52', function(data) {
        fn(data);
    });
};


/**
 * @param {Function} fn
 */
module.exports.getBuyerInfo = function(fn) {
    getApi('getBuyerInfo', null, function(data) {
        fn(data);
    });
};


/**
 * @param {Function} fn
 * @param {Object|string} params
 */
module.exports.buyerLogin = function(fn, params) {
    postApi('buyerLogin', params, function(data) {
        fn(data);
    });
};


/**
 * @param {Function} fn
 */
module.exports.getHomePagePromotions = function(fn) {
    getApi('homePage', null, function(data) {
        fn(data);
    });
};
