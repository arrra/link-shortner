var routes = require('../routes/index');
var users = require('../routes/users');
//set up link

var router = {
  setupRoutes: function(app) {
    app.use('/', routes);
    app.use('/users', users);
    //add one for link route
  }
};

module.exports = router;
