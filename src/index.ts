import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import fs from 'fs';
import http from 'http';
import https from 'https';

const dotenv = require('dotenv').config();

// Start the server
const port = Number(80);
app.listen(port, () => {
  logger.info('Express server started on port: ' + port);
});
https
  .createServer(
    {
      key: fs.readFileSync(
        '/etc/letsencrypt/live/server.shareddit.com/privkey.pem'
      ),
      cert: fs.readFileSync(
        '/etc/letsencrypt/live/server.shareddit.com/fullchain.pem'
      ),
    },
    app
  )
  .listen(80);
