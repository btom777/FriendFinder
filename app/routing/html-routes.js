var friendData = require('../data/friends.js');
module.exports = function (app) {
    
    app.post('/api/friends', function (req, res) {
        compare(req.body, res);
    });
}