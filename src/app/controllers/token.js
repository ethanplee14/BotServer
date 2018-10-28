import token from '../auth/rsa-token'
import Account from '../models/account'

module.exports = {
    "get~ /token": function(req, res) {
        Account.findOne({active: false}, function(err, acc) {
            if(err) console.log(err);
            else token(acc).then((token) => res.send(token));
        });
    },
};

