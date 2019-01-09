import Session from '../../../models/mongoose-models/session'
import tokenHandler from '../../../models/auth/handle-token'
import create from '../../../models/create'

module.exports = {
    'post~ /session/create': (req, res) => {
        tokenHandler(req, res, (decodedToken) => {
            req.body['account'] = decodedToken['_id'];
            create(Session, req.body).then(session => {
                res.send(session.id)
            })
        });
    }
};