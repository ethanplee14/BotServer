import jwt from 'jsonwebtoken'
import util from 'util'
import fs from 'fs'


module.exports = function(req, res) {
    let token = req.headers['x-access-token'];
    // shoudlnt' send a response because anything outside of it will get jacked up
    //throw error
    if(!token) {
        res.status(403).send({auth: false, message: 'No token provided'});
        return;
    }

    let readFile = util.promisify(fs.readFile);
    let verifier = util.promisify(jwt.verify);
    return readFile(paths.res+'/public.key').then((publicKey) => verifier(token, publicKey));
};
