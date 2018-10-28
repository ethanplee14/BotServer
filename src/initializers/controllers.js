import requirer from '../lib/requirer'

module.exports = function() {
    return requirer.folder(paths.app.controllers);
};