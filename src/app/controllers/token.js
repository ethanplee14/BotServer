import token from '../models/auth/rsa-token'
import Account from '../models/mongoose-models/account'

module.exports = {
    "get~ /token": function(req, res) {
        let accQuery = {
            status: "idle",
            stocked: true,
            $or: [
                {'breakUntil': {$exists: false}},
                {'breakUntil': null},
                {'breakUntil': {$lt: Date.now()}}
            ]
        };
        Account.findOne(accQuery, function(err, acc) {
            if(acc != null) { //separate break logic into it's own module
                let accObj = acc.toJSON();
                let min = 1000 * 60;
                let hour = min * 60;
                let exp = Math.floor(Math.random() * ((5*hour+1) - 2*hour) + 2*hour) + 5*min;

                acc['status'] = "Logging in";
                acc.save();
                token(accObj, {
                    algorithm: 'RS256',
                    expiresIn: exp
                }).then((token) => res.send(token));
            } else
                res.send("No available accounts");
        });
    },
};

