import getStats from '../../models/total-data'

module.exports = {
    "get~ /stats": function(req, res) {
        getStats().then(data => {
            res.render('statistics', Object.assign({'scriptName': 'statsScript'}, data));
        });
    }
};