import fs from 'fs';

const corsProxy = require('cors-anywhere');

export function start(): void {
  corsProxy
    .createServer({
      originWhitelist: [],
      requireHeader: [],
      removeHeaders: [
        'cookie1',
        'cookie2',
        'x-request-start',
        'x-request-id',
        'via',
        'connect-time',
        'total-route-time',
      ],
      redirectSameOrigin: true,
      httpProxyOptions: {
        xfwd: true,
      },
      httpsOptions: {
        key: fs.readFileSync(
          '/etc/letsencrypt/live/server.shareddit.com/privkey.pem'
        ),
        cert: fs.readFileSync(
          '/etc/letsencrypt/live/server.shareddit.com/fullchain.pem'
        ),
      },
    })
    .listen(8080, '0.0.0.0', console.log('CORS Anywhere started'));
}
