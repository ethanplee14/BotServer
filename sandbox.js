let mongo = require('./dist/initializers/mongo');
let Session = require('./dist/app/models/mongoose-models/session');

mongo('mongodb://tribotClient:pleerice@localhost:27017/cannonball');

Session.find({
    start: {
        $lt: new Date("30 May 2019")
    }
}, function(err, docs) {
    if(err)
        console.log(err);

    console.log(docs);
});