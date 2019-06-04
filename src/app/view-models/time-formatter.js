import FormatUtils from './format-utils'

module.exports = function(millis) {
    let time = [];
    time.push(Math.floor((millis / (1000 * 60 * 60))));
    time.push(Math.floor((millis / (1000 * 60)) % 60));
    time.push(Math.floor((millis / 1000) % 60));

    for(let i in time)
        time[i] = FormatUtils.doubleDigit(time[i]);
    return time.join(':');
};