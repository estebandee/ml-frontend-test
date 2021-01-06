const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use('/api', routes);

app.listen(8080, () => {
  console.info('Server started in port 8080');
});
