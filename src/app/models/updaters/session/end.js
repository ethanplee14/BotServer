
module.exports = function(session, value) {
    if (isNaN(value)) return;

    let endTime = parseInt(value, 10);
    let breakTime = endTime + Math.floor(Math.random() * ((1000 * 60 * 60 * 2)+1));

    session['end'] = new Date(endTime);
    session.account.breakUntil = new Date(breakTime);
    session.account.status = "idle";
    session.account.save();
};