import Cannonballer from '../../models/mongoose-models/cannonballer'

module.exports = {
    'get~ /cannonballer/read': function(req, res) {
        Cannonballer.find({stocked: false}).populate('account').exec()
            .then(stockedCballer => {
                console.log(stockedCballer);
                res.send('success');
            });
    }
};