var util = require('../util'),
    api = require('../api');

exports.index = function(req, res){
    api.getForgeryToken(function(data) {
        res.render('index', {
            projectName: 'Proof of concept',
            deviceId: config.DEVICE_ID,
            forgeryToken: JSON.parse(data)['forgery_token']
        });
    });
};
