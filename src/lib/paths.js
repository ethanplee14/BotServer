import path from 'path'

function Paths(root) {
    this.root = root;
}

Paths.prototype.resolve = function() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this.root);
    return path.resolve.apply(path, args);
};

Paths.prototype.add = function() {
    var paths = Array.prototype.slice.call(arguments);
    for(let path of paths) {
        if(!(path instanceof Array))
            path = [path, path];

        this[path[0]] = this.resolve(path[1]);
    }
    return this;
};

Paths.path = path;
module.exports = Paths;