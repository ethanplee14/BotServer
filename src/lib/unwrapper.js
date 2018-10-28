function unwrap(target, wrappers, buffer) {
    wrappers = wrappers || [];
    buffer = buffer || [];

    if(Object.keys(target) < 1) {
        buffer.push(target);
        wrappers.push(buffer);
    }

    for(let key in target) {
        const wrapper = (buffer || []).slice();
        wrapper.push(key);
        unwrap(target[key], wrappers, wrapper);
    }

    return wrappers;
}

module.exports = unwrap;