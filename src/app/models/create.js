
module.exports = function(model, payload) {
    let keys = Object.keys(model.schema.paths).slice(0, -2);
    let attr = {};

    keys.forEach((ele) => {
        if(ele in payload)
            attr[ele] = payload[ele]
    });
    let mod = new model(attr);
    return mod.save();
};