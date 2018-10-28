global.paths = require('./directories');
global.get = require('./lib/requirer');

const initializers = get.folder(paths.initializers);

module.exports = initializers.express(function(app) {
    initializers.mongo('mongodb://admin:pleerice1@ds117061.mlab.com:17061/botsandbox');

    const router = require('./router');
    const controllers = initializers.controllers();

    app.use(router(controllers));
});