var http = require('http'),
    _ = require('underscore');


/**
 * @type {Object}
 */
config = {
    HOST: '172.20.8.21',
    PORT: 18009,
    AUTH: 'api_key=iphone,api_hash=3509690dec8ec3ec3dc85eb7764fe6e2,api_random=random',
    DEVICE_ID: '13t8t2ge652az1t7h52'
};


/**
 * @param {string} path
 * @param {string} data
 * @param {Function} success
 * @param {Function} fail
 * @param {Object=} options
 */
getApi = function(path, data, success, fail, options) {
    var headers = {
        'Authorization': config.AUTH
    };

    http.get({
        host: config.HOST,
        path: '/mobileapi/rest/' + path + (data ? '?' + data : ''),
        port: config.PORT,
        headers: _.extend(headers, options)
    }, function(httpResponse) {
        var response = '';

        httpResponse.on('data', function(chunk) {
            response += chunk;
        });

        httpResponse.on('end', function() {
            success(response);
        });
    });
};


postApi = function(path, data, success, fail, options) {
    var headers = {
        'Authorization': config.AUTH
    };

    http.post({
        host: config.HOST,
        path: '/mobileapi/rest/' + path + (data ? '?' + data : ''),
        port: config.PORT,
        headers: _.extend(headers, options)
    }, function(httpResponse) {
        var response = '';

        httpResponse.on('data', function(chunk) {
            response += chunk;
        });

        httpResponse.on('end', function() {
            success(response);
        });
    });

};


/**
 * Api Http Request Error Handlers
 * @param {Object} res
 */
var apiErrorHandlers = function(res, fail) {
    switch (res.statusCode) {
        case 401:
            console.log(401);
            break;
        case 405:
            console.log(res);
            break;
        default:
            console.log(res.statusCode);
            break;
    }
};
