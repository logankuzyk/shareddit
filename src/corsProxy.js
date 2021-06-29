const corsProxy = require('cors-anywhere');

module.exports.start = () => {
  corsProxy
    .createServer({
      originWhitelist: [],
      requireHeader: ['origin', 'x-requested-with'],
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
    })
    .listen(8080, '0.0.0.0', console.log('CORS Anywhere started'));
};
