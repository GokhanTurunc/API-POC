var http = require('http'),
    fs = require('fs');

/**
 *
 * @constructor
 */
module.exports.getBestSellingApi = function(fn) {
    http.get({
        host: '172.20.8.21',
        path: '/mobileapi/rest/bestSelling?categoryGroupCode=elektronik&currentPage=0&itemsPerPage=100',
        port: '18009',
        headers: {
            'Authorization': 'api_key=iphone,api_hash=3509690dec8ec3ec3dc85eb7764fe6e2,api_random=random'
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

