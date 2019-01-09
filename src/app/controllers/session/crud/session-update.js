import Session from '../../../models/mongoose-models/session'
import tokenHandler from '../../../models/auth/handle-token'
import update from '../../../models/update'

module.exports = {
    "put~ /session/update/:id": function(req, res) {
        tokenHandler(req, res, (decodedToken) => {
            Session.findOne({account: decodedToken['_id'], _id: req.params.id})
                .populate('account')
                .exec((err, session) => updateSession(session, req, res));
        });
    }
};

function updateSession(session, req, res) {
    if (session == null){
        res.send("No session from given id found");
        return;
    }

    let payload = req.body;
    delete payload.account;
    let updaters = get.folder(paths.app.models + '/updaters/session');
    update(session, payload, updaters)
        .then(() => res.send('success'))
        .catch(console.log);
}

