import Session from '../../models/session'
import verifier from '../../auth/verify-token'
import create from '../../models/create'

module.exports = {
    'post~ /session/create': (req, res) => {
        let message = {
            auth: true,
            msg: 'success'
        };
        verifier(req, res)
            .then((decodedToken) => {
                req.body['account'] = decodedToken['_id'];
                console.log(req.body);
                return create(Session, req.body);
            }).catch(() => {
            message['auth'] = false;
            message['msg'] = "Cannot verify token";
        }).then((session) => {
            if(session === undefined || !message['auth'])
                res.status(500);
            else
                message['sessionId'] = session._id;
            res.send(message)
        })
    }
};