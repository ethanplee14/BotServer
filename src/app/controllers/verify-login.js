import bcrypt from 'bcryptjs'
import User from '../models/mongoose-models/user'
import token from '../models/auth/rsa-token'

module.exports = {
    'post~ /verify-login': function(req, res) {
        let payload = req.body;
        User.findOne({user: payload['user']}).exec()
            .then((acc) => bcrypt.compare(payload['password'], acc['password']))
            .then(verified => {
                if(verified)
                    return token({admin: 'Authorized'}, {
                        algorithm: 'RS256',
                        expiresIn: '24h'
                    });
                throw new Error()
            }).then(token => res.send(token))
            .catch(() => res.status(401).send("Unauthorized"));
    }
};