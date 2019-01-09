import Account from '../../../models/mongoose-models/account'

module.exports = {
    'delete~ /account/delete': function (req, res) {
        Account.deleteOne(req.body, function(e) {
            if (e) {
                console.log(e);
                res.send("Error deleting account");
            } else {
                res.send('success');
            }
        })
    }
};