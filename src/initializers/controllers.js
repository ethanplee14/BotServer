import requirer from '../lib/requirer'
import glob from 'glob'

module.exports = function() {
    let controllers = {};
    controllers['unprotected'] = requirer.files.apply(requirer, glob.sync(paths.app.controllers + '/*.js'));
    controllers['protected'] = requirer.folder(paths.app.controllers + '/protected');
    return controllers;
};