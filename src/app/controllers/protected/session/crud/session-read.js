import Session from '../../../../models/mongoose-models/session'

module.exports = {
    'get~ /session/read/:id': (req, res) => {
        Session.find({}).sort({start:-1}).lean().exec((err, sessions) => {
            for (let session of sessions) {
                console.log(session.start);
            }
            res.send("done");
        });
    }
};