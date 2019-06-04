import bcrypt from 'bcryptjs'
import cookie from 'cookie'
import User from '../models/mongoose-models/user'
import token from '../models/auth/rsa-token'

module.exports = {
    'post~ /verify-login': function(req, res) {
        let payload = req.body;
        User.findOne({user: payload['user']}).exec()
            .then((acc) => bcrypt.compare(payload['password'], acc['password']))
            .then(verified => {
                if(verified)
                    return token({admin: 'true'}, {
                        algorithm: 'RS256',
                        expiresIn: '24h'
                    });
                throw new Error()
            }).then(token => {
                res.setHeader('Set-Cookie', cookie.serialize('token', token, {
                    httpOnly: true,
                    secure: true,
                    sameSite: true,
                    maxAge: 60 * 60 * 24
                }));
                res.send("success");
            }).catch(() => res.status(401).send("Unauthorized"));
    }
};