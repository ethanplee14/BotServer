import util from "util";
import fs from "fs";
import jwt from "jsonwebtoken";
import cookie from 'cookie'

module.exports = function(req, res, next) {
    let cookieStr = req.headers['cookie'];

    if(!cookieStr || !cookie.parse(cookieStr)['token']) {
        res.redirect('/login')
    } else {
        let token = cookie.parse(cookieStr)['token'];
        let readFile = util.promisify(fs.readFile);
        let verify = util.promisify(jwt.verify);
        readFile(paths.res +'/jwt/public.pem', 'utf8')
            .then((publicKey) => verify(token, publicKey, {algorithm: 'RS256'}))
            .then((token) => {
                req['token'] = token;
                next()
            })
            .catch(e => {
                console.log(e);
                res.redirect('/login');
            });
    }
};