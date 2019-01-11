import Session from '../../../../models/mongoose-models/session'
import create from '../../../../models/create'

module.exports = {
    'post~ /session/create': (req, res) => {
        req.body['account'] = req['token']['_id'];
        create(Session, req.body).then(session => {
            res.send(session.id)
        });
    }
};