import Account from '../../models/account'
import create from '../../models/create'

module.exports = {
    "post~ /account/create": function(req, res) {
        req.body['active'] = false;
        create(Account, req.body).then(() => res.send('success'))
            .catch((e) => {
                res.status(500).send("Error creating account. Missing params: " + Object.keys(e.errors))
            });
    }
};

