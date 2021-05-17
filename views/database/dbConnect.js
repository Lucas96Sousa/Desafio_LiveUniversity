const tp = require("tedious-promises");
const config = require("../../config.json");



if (tp.err) {
  console.log(err);
} else {
  tp.setConnectionConfig(config);
  console.log("connect");
}