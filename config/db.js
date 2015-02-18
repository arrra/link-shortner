var mongoose = require('mongoose'),
conn         = mongoose.connection; //Default Connection

var uri = 'mongodb://localhost/link-shortner';

conn.on('error', console.error.bind(console, "Mongoose connection error: "));
conn.once('open', function() {
  console.log("connected to MongoDb: ", uri);
});

mongoose.connect(uri);

module.exports = conn;
