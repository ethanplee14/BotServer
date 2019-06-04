import DateFormatter from "./date-formatter";


module.exports = function(sessions) {
    let sessionsTable = {};
    sessionsTable['headers'] = ["Id", "Account", "Bars", "CBalls", "XP", "Start", "Last Updated"];
    sessionsTable['rows'] = [];

    for(let session of sessions) {
        let row = [];
        let startTime = new DateFormatter(session['start']);
        let endTime = new DateFormatter(new Date(session['start'] + session['runtime']));

        row.push(session['_id']);
        row.push(session['account']);
        row.push(session['barsSmithed']);
        row.push(session['barsSmithed'] * 4);
        row.push(session['xpGained']);
        row.push(startTime.getTimeDate());
        row.push(endTime.getTimeDate());
        sessionsTable.rows.push(row);
    }
    return sessionsTable;
};