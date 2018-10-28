import util from "util";
import fs from "fs";
import jwt from "jsonwebtoken";

module.exports = function(payload) {
    console.log(payload);
    let readFile = util.promisify(fs.readFile);
    let sign = util.promisify(jwt.sign);

    let readPrivKey = readFile(paths.res + '/private.key', 'utf8');
    return new Promise((resolve, reject) => {
        readPrivKey.then((key) =>
            sign(payload.toJSON(), key, {algorithm: 'RS256'})
        ).then((token, err) => {
            if (err) reject(err);
            else resolve(token);
        })
    })
};