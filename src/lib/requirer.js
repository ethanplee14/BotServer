import glob from 'glob'

module.exports = {
    names: (folder) => glob.sync(`${folder}/**/*.js`),

    file: function (path) {
        return require(`${path}`);
    },

    files: function () {
        var modules = {};
        var paths = Array.prototype.slice.call(arguments);
        for (let path of paths) {
            var name = path.split('/').pop();
            var ext = name.indexOf('.');
            name = name.substring(0, ext == -1 ? name.length : ext);
            modules[name] = this.file(path);
        }
        return modules;
    },

    folder: function (path) {
        return this.files.apply(this, this.names(path))
    },

    folders: function (pattern) {
        var modules = {};
        var folders = Array.prototype.slice.call(arguments);
        for (let folder of folders)
            modules[folder] = this.folder(folder);
        return modules;
    }
};