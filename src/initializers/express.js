import express from 'express'
import logger from 'morgan'
import hbs from 'express-handlebars'
import stylus from 'stylus'

module.exports = function(callback) {
    const app = express();

    app.set('views', paths.app.views);
    app.set('view engine', 'hbs');
    app.engine('hbs', hbs({
        extname: 'hbs',
        defaultLayout: 'application',
        layoutsDir: paths.app.resolve(paths.app.views, 'layouts'),
        partialsDir: paths.app.resolve(paths.app.views, 'partials'),
        helpers: require('./handlebars-helpers')
    }));

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(stylus.middleware(paths.public));
    app.use(express.static(paths.public));

    callback(app);

    app.use(function(req, res, next) {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.status || 500);
        res.render('error');
    });

    return app;
};