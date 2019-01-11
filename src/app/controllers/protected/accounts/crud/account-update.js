import Account from '../../../../models/mongoose-models/account'
import update from '../../../../models/update'

module.exports = {
    'put~ /account/update/:id': function(req, res) {
        let id = req.params.id;
        if (notAdmin(req))
            id = req['token']['_id'];
        Account.findById(id, (err, acc) => {
            if (acc == null) {
                res.status(404).send("No account found");
                return;
            }
            update(acc, req.body, get.folder(paths.app.models + '/updaters/account'))
                .then((() => res.send("success")))
                .catch(console.log);
        });
    }
};

let notAdmin = (req) => !req['token']['admin'];