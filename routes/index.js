exports.index = function(req, res){
    res.render('index', {
        projectName: 'Proof of concept'
    });
};