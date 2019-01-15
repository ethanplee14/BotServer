
module.exports = {
    'get~ /login': function(req, res) {
        res.render('login', {scriptName: 'loginScript'})
    }
};