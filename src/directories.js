import Paths from './lib/paths'

const directories = new Paths(__dirname);
directories.app = new Paths(directories.resolve('app'));

directories.add('initializers', ['public', '../public'], ['res', '../res']);
directories.app.add('controllers', 'models', ['views', '../../public/views']);

module.exports = directories;