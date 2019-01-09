import formatDate from "./date-formatter";


module.exports = function(sessions) {
    let sessionsTable = {};
    sessionsTable['headers'] = ["Id", "Account", "Bars", "CBalls", "XP", "Start", "End"];
    sessionsTable['rows'] = [];

    for(let session of sessions) {
        let row = [];
        row.push(session['_id']);
        row.push(session['account']['name']);
        row.push(session['barsSmithed']);
        row.push(session['barsSmithed'] * 4);
        row.push(session['xpGained']);
        row.push(formatDate(session['start']));
        row.push(session['end'] == undefined ? '' : formatDate(session['end']));
        sessionsTable.rows.push(row);
    }
    return sessionsTable;
};