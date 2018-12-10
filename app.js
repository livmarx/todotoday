const express = require('express');
const app = express(); // object with methods; One method is router; express creates a server; app allows us to access the server; app.listen hooks up our server;

const morgan = require('morgan'); //app.use(...) morgan says console.log(what app.use does);
const { db, List, ToDo, User } = require('./backend/db/index');

// Logger:
app.use(morgan('dev')); // implies '/' ('/', morgan('dev'));

//Body parser:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// public:
app.use(express.static(__dirname + '/public'));

// Routes
app.use('/api', require('./backend/routes/index'));

const PORT = 8080;

const init = async function() {
  // await db.sync();
  app.listen(PORT, function() {
    console.log(
      ` ***** I'm leisurely listening on pleasent port of ${PORT} *****`
    );
  });
};

init();
