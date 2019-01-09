
let days = ['Sun', 'Mon', "Tue", 'Wed', 'Thu', 'Fri', 'Sat'];

module.exports = function(date) {
    date = date instanceof Date ? date : new Date(date);
    let formattedDate = '';

    formattedDate += doubleDigit(date.getHours()) + ':';
    formattedDate += doubleDigit(date.getMinutes()) + ':';
    formattedDate += doubleDigit(date.getSeconds()) + ' ';

    formattedDate += doubleDigit((date.getMonth())+1) + '/';
    formattedDate += doubleDigit(date.getDate()) + '/';
    formattedDate += date.getFullYear() + ' ';

    formattedDate += days[date.getDay()];

    return formattedDate;
};

function doubleDigit(numb) {
    if(numb < 10)
        return '0' + numb.toString();
    return numb.toString();
};