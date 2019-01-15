import Cannonballer from '../../../models/mongoose-models/cannonballer'
import create from '../../../models/create'

module.exports = {
    'post~ /cannonballer/create': function (req, res) {
        create(Cannonballer, req.body)
            .then(() => res.send('success'));
    }
};