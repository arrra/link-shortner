var routes = require('../routes/index'),
users      = require('../routes/users');

var router = {
  setupRoutes: function(app) {
    app.use('/', routes);
    app.use('/users', users);
  }
};

module.exports = router;
