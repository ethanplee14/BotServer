
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function formatDate(date) {
    date = _normalize(date);
    return `${months[date.getMont()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatDateTime(date) {
    date = _normalize(date);
    return
}

function _normalize(date) {
    return (date instanceof Date) ? date : new Date(date);
}

function doubleDigit(numb){
    if(numb < 10)
        return '0' + numb.toString();
    return numb.toString();
};
