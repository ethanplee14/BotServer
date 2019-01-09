import formatDate from "./date-formatter";


module.exports = function(accounts) {
    let accountsTable = {
        'name': 'accounts',
        'headers': ['Name', 'Status', 'Last Status Change', 'Stocked', 'Break'],
        'rows': []
    };

    for (let account of accounts) {
        let row = [account['name'], account['status'],
            account['lastStatusChange'] == undefined ? '' : formatDate(account['lastStatusChange']), account['stocked']];

        if (account['breakUntil'] == undefined) {
            row.push('');
        } else {
            let breakDate = new Date(account['breakUntil']);
            if (breakDate.getTime() > Date.now())
                row.push(formatDate(breakDate));
            else
                row.push('')
        }
        accountsTable.rows.push(row)
    }
    return accountsTable;
};