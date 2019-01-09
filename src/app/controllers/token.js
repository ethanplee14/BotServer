import token from '../models/auth/rsa-token'
import Account from '../models/mongoose-models/account'

module.exports = {
    "get~ /token": function(req, res) {
        let accQuery = {
            status: "idle",
            stocked: true,
            $or: [
                {'breakUntil': {$exists: false}},
                {'breakUntil': {$lt: Date.now()}}
            ]
        };
        Account.findOne(accQuery, function(err, acc) {
            if(err) {
                console.log(err);
                res.status(500).send("Internal Server Error");
            }

            if(acc != null){ //separate break logic into it's own module
                let accObj = acc.toJSON();
                let twoHours = 1000 * 60 * 60 * 2;
                let fiveHours = 1000 * 60 * 60 * 5;

                accObj['run'] = Math.floor(Math.random() * ((fiveHours+1) - twoHours) + twoHours);
                token(accObj).then((token) => res.send(token));
                acc.status = "cballin";
                acc.save();
            } else
                res.send("No available accounts");
        });
    },
};

