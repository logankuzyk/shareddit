const r = require("./reddit");
const makeImage = require("./makeImage");

module.exports.generate = async (params) => {
  let data = await r.getData(params);
  let url = await makeImage(data);
  return { url: url, title: data.title };
};
