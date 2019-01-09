import Session from '../../models/mongoose-models/session'
import sessionsTable from '../../view-models/sessions-table';
import pagination from '../../view-models/pagination'

module.exports = {
    "get~ /sessions": function (req, res) {
        let query = req.query;
        query['start'] = query['start'] || 0;
        query['end'] = query['end'] || 15;

        Session.find({})
            .sort({start: -1})
            .populate('account')
            .lean()
            .exec((err, sessions) => {
                res.render("session-viewer", {
                    "pagination": pagination(sessions.length, query),
                    "sessionsTable": sessionsTable(sessions.slice(query['start'], query['end']))
                });
            })
    }
};




