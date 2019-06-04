import FormatUtils from './format-utils'

let days = ['Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat'];

let DateFormatter = function(date) {
    this.date = date instanceof Date ? date : new Date(date);
};

DateFormatter.prototype.getTimeDate = function() {
    return this.getTime() + ' ' + this.getDate();
};

DateFormatter.prototype.getDate = function() {
    let formattedDate = '';//fix this ugly shit
    formattedDate += FormatUtils.doubleDigit((this.date.getMonth())+1) + '/';
    formattedDate += FormatUtils.doubleDigit(this.date.getDate()) + '/';
    formattedDate += this.date.getFullYear() + ' ';
    formattedDate += days[this.date.getDay()];
    return formattedDate;
};

DateFormatter.prototype.getTime = function() {
    let formattedTime = '';
    formattedTime += FormatUtils.doubleDigit(this.date.getHours()) + ':';
    formattedTime += FormatUtils.doubleDigit(this.date.getMinutes()) + ':';
    formattedTime += FormatUtils.doubleDigit(this.date.getSeconds());
    return formattedTime;
};

module.exports = DateFormatter;