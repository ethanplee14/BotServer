let mongo = require('./dist/initializers/mongo');
let Session = require('./dist/app/models/mongoose-models/session');

mongo('mongodb+srv://ethanplee14:pleerice1@botcluster-kxmay.mongodb.net/BotServer?retryWrites=true');
Session.deleteMany({'barsSmithed': 0}, function (err) {
});