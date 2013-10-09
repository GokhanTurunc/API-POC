var http = require('http'),
    fs = require('fs');

/**
 *
 * @constructor
 */
module.exports.getBestSellingApi = function(fn) {
    http.get({
        host: '127.0.0.1',
        path: '/mobileapi/rest/bestSelling',
        port: '80',
        headers: {
            'key': 'value'
        }
    }, function(httpResponse) {
        var response = '';

        httpResponse.on('data', function(chunk) {
            response += chunk;
        });

        httpResponse.on('end', function() {
            fn(response);
        });
    });
};
