import Session from '../../models/session'
import verifier from '../../auth/verify-token'

module.exports = {
    "patch~ /session/update/:id": function(req, res) {
        let sessionId = req.params.id;
        verifier(req, res).then((decodedToken) => {
            Session.findOne({account: decodedToken['_id'], _id: sessionId}, (err, session) => {
                let payload = req.body;
                delete payload.account;

                for(let [key, val] of Object.entries(payload)) {
                    if(key == 'break') {
                        let breakData = val.split('-');
                        session.breaks.push([new Date(parseInt(breakData[0], 10)), new Date(parseInt(breakData[1], 10))]);
                    } else {
                        session[key] = val;
                    }
                }
                session.markModified();
                session.save().then(() => res.send('success')).catch(console.log);
            });
        });
    }
};

