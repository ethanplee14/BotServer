import util from "util";
import fs from "fs";
import jwt from "jsonwebtoken";

module.exports = function(payload, options = {algorithm: 'RS256'}) {
    let readFile = util.promisify(fs.readFile);
    let sign = util.promisify(jwt.sign);

    let readPrivKey = readFile(paths.res + '/jwt/private.der', 'utf8');
    return new Promise((resolve, reject) => {
        readPrivKey.then((key) =>
            sign(payload, key, options)
        ).then((token, err) => {
            if (err) reject(err);
            else resolve(token);
        })
    })
};