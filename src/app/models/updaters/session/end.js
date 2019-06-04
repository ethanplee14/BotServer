
module.exports = function(session, value) {
    if (isNaN(value)) return;

    let endTime = parseInt(value, 10);
    let min = 1000 * 60;
    let hour = min * 60;
    let breakTime = endTime + Math.floor(Math.random() * ((2*hour)+1));
    let currentDate = new Date();
    if (currentDate.getHours() > 22 || currentDate.getHours() < 6) {
        breakTime = Math.floor(Math.random() * ((6*hour+1) - 3*hour) + 3*hour);
    }

    session['end'] = new Date(endTime);
    session.account.breakUntil = new Date(breakTime);
    session.account.status = "idle";
    session.account.save();
};