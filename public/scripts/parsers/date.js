
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function formatDate(date) {
    date = _normalize(date);
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatTime(date) {
    date = _normalize(date);
    let formattedTime = '';
    formattedTime += doubleDigit(date.getHours()) + ':';
    formattedTime += doubleDigit(date.getMinutes()) + ':';
    formattedTime += doubleDigit(date.getSeconds());
    return formattedTime;
}

function formatDateTime(date) {
    date = _normalize(date);
    return formatTime(date) + ' ' + formatDate(date);
}

function _normalize(date) {
    return (date instanceof Date) ? date : new Date(date);
}

function doubleDigit(numb) {
    if(numb < 10)
        return '0' + numb.toString();
    return numb.toString();
}
