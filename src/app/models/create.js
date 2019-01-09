
module.exports = function(model, payload) {
    let keys = Object.keys(model.schema.paths).slice(0, -2);
    let attr = {};

    keys.forEach((ele) => {
        if(ele in payload && payload[ele] != '' || payload['ele'] != undefined || payload['ele'] != null)
            attr[ele] = payload[ele]
    });
    let mod = new model(attr);
    return mod.save();
};