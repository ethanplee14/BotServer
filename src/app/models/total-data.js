import Session from '../models/mongoose-models/session'
import formatTime from '../view-models/time-formatter'

module.exports = function() {
    let sumOp = {
        $group: {
            _id: '',
                totalXp: {$sum: '$xpGained'},
            totalBars: {$sum: '$barsSmithed'},
            totalRuntime: {$sum: '$runtime'}
        }
    };

    let removeIdOp = {$project: {_id: 0}};

    return new Promise(function(resolve, reject) {
        Session.aggregate([sumOp, removeIdOp], function(err, results) {
            if (err) reject("Error getting stats sum.");
            else resolve(calculateData(results[0]))
        });
    });
};

function calculateData(data) {
    data['totalRuntime'] = formatTime(data['totalRuntime']);
    data['totalCballs'] = data['totalBars'] * 4;
    return data;
}


