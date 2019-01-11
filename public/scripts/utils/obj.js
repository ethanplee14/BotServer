
function clean(obj) {
    for(let [key, val] of Object.entries(obj)) {
        console.log(val);
        if (val == '' || val == undefined || val == null)
            delete obj[key]
    }
    console.log(obj);
}