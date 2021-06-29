const corsProxy = require('cors-anywhere');

module.exports.start = () => {
  corsProxy
    .createServer({
      originWhitelist: [],
      requireHeader: [],
    })
    .listen(8080, '0.0.0.0', console.log('CORS Anywhere started'));
};
