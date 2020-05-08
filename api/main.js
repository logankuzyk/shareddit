const r = require("./reddit");

module.exports.generate = async (params) => {
  return await r.getData(params);
};
