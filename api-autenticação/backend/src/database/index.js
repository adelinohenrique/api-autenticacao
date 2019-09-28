const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/noderest', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  });
mongoose.Promise = global.Promise;


module.exports = mongoose;

