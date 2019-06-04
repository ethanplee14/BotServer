import Session from '../models/mongoose-models/session'

module.exports = function(day) {
    if(!day instanceof Date) day = new Date(day);
    let nextDate = nextDate(day);

    Session.find({
        start: {
            $gte: day.getTime(),
            $lte: nextDate.getTime()
        }
    });
};

function nextDate(date) {
    let nextDate = new Date(date.getTime());
    nextDate.setDate(date.getDate() + 1);
    return nextDate;
}