import requirer from '../lib/requirer'

module.exports = function() {
    let controllers = requirer.folder(paths.app.controllers, '/!(protected)/*.js');
    Object.assign(controllers, requirer.folder(paths.app.controllers, '/*.js'));
    controllers['protected'] = requirer.folder(paths.app.controllers + '/protected');
    return controllers;
};