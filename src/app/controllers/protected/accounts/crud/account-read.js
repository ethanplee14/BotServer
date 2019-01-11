import Account from '../../../../models/mongoose-models/account'

module.exports = {
    'get~ /account/read': function(req, res) {
        let query = req.query;
        Account.findOne(query).lean().exec()
            .then((acc) => res.send(acc))
            .catch(console.log);
    }
};