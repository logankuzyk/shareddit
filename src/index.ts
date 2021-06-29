import './pre-start'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import fs from 'fs';
import http from 'http';
import https from 'https';
import corsProxy from 'cors-anywhere';

const dotenv = require('dotenv').config();

// Start the server
const port = Number(80);
http.createServer(app).listen(port);
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
  .listen(443);

corsProxy.createServer({
  originWhitelist: [],
  requireHeader: [],
});
