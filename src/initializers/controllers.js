import requirer from '../lib/requirer'

module.exports = function() {
    let controllers = {};
    controllers['unprotected'] = requirer.folder(paths.app.controllers + '/unprotected');
    controllers['protected'] = requirer.folder(paths.app.controllers + '/protected');
    return controllers;
};