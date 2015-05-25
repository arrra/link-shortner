var routes = require('../routes/index');

var router = {
  setupRoutes: function(app) {
    app.use('/', routes);
  }
};

module.exports = router;
