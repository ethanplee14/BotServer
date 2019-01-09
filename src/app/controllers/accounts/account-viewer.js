import Account from '../../models/mongoose-models/account'
import accountsTable from '../../view-models/accounts-table'

module.exports = {
    "get~ /accounts": function(req, res) {
        let queryPromise = getAccs(["cballin", "idle", "banned"]);
        queryPromise.then(function(accsArray) {
            let accounts = [];

            for(let accs of accsArray)
                accounts = accounts.concat(accs);

            res.render('account-viewer', {
                'scriptName': 'accountScript',
                'accountTable': accountsTable(accounts),
            })
        });

    }
};

function getAccs(statuses) {
    let queries = [];
    for (let stat of statuses)
        queries.push(Account.find({status: stat}).lean().exec());
    return Promise.all(queries);
}

