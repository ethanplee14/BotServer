import handleToken from './app/models/auth/handle-token'

global.paths = require('./directories');
global.get = require('./lib/requirer');

const initializers = get.folder(paths.initializers);

module.exports = initializers.express(function(app) {
    // initializers.mongo('mongodb+srv://ethanplee14:pleerice1@botcluster-kxmay.mongodb.net/BotServer?retryWrites=true');
    initializers.mongo('mongodb://tribotClient:pleerice@localhost:27017/cannonball');
    const router = require('./router');
    const controllers = initializers.controllers();
    let protectedRoutes = controllers['protected'];
    delete controllers['protected'];
    app.use(router(controllers));
    app.use(handleToken);
    app.use(router(protectedRoutes));
});