import Account from '../../../models/mongoose-models/account'
import tokenHandler from '../../../models/auth/handle-token'
import update from '../../../models/update'

module.exports = {
    'put~ /account/update': function(req, res) {
        tokenHandler(req, res, (decodedToken) => {
            Account.findOne({_id: decodedToken['_id']}, (err, acc) => {
                if (acc == null) {
                    res.status(400).send("No account found from given token id");
                    return;
                }
                update(acc, req.body, get.folder(paths.app.models + '/updaters/account'))
                    .then((() => res.send("success")))
                    .catch(console.log);
            });
        })
    }
};