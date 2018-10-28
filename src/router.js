import express from "express";

module.exports = function(controllers) {
    const app = express.Router();

    for(let name in controllers) {
        let controller = controllers[name];
        for(let route in controller) {
            const request = route.split('~ ');
            app[request[0]](request[1], controller[route]);
        }
    }

    return app;
};