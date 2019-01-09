

module.exports = (model, payload, updaters = {}) => {
    for(let [key, val] of Object.entries(payload)) {
        if (key in updaters)
            updaters[key](model, val);
        else
            model[key] = val;
    }
    return model.save();
};