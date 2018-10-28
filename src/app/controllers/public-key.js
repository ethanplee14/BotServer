import fs from 'fs'

module.exports = {
    "get~ /publickey": function(req, res) {
        fs.readFile(paths.res + '/public.key', (err, data) => {
            if(err) console.log(err);
            else res.send(data);
        })
    }
};

