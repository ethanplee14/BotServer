import util from "util";
import fs from "fs";
import jwt from "jsonwebtoken";

module.exports = function(req, res, callback) {
    let token = req.headers['x-access-token'];

    if(!token) {
        res.status(400).send('No token provided');
    } else {
        let readFile = util.promisify(fs.readFile);
        let verifier = util.promisify(jwt.verify);
        readFile(paths.res +'/jwt/public.pem', 'utf8')
            .then((publicKey) => verifier(token, publicKey, {algorithm: 'RS256'}))
            .then(callback)
            .catch(e => {
                e.auth = false;
                res.status(400).send(e);
            });
    }
};