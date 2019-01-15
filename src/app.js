import handleToken from './app/models/auth/handle-token'

global.paths = require('./directories');
global.get = require('./lib/requirer');

const initializers = get.folder(paths.initializers);

module.exports = initializers.express(function(app) {
    initializers.mongo('mongodb+srv://ethanplee14:pleerice1@botcluster-kxmay.mongodb.net/BotServer?retryWrites=true');
    const router = require('./router');
    const controllers = initializers.controllers();
    app.use(router(controllers['unprotected']));
    app.use(handleToken);
    app.use(router(controllers['protected']));
});