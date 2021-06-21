import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';

const dotenv = require('dotenv').config();

// Start the server
const port = Number(3001);
app.listen(port, () => {
  logger.info('Express server started on port: ' + port);
});
