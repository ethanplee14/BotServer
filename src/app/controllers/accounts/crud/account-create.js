import Account from '../../../models/mongoose-models/account'
import create from '../../../models/create'

module.exports = {
    "post~ /account/create": function(req, res) {
        create(Account, req.body).then(() => res.send('success'))
            .catch((e) => res.status(400).send(e.toString()));
    }
};

