const request = require("request");
const {
  METRA_USERNAME,
  METRA_PASSWORD,
  METRA_BASEURL,
  METRA_ALERTS_PATH,
  POLLING_INTERVAL
} = require("dotenv").config();

const username = process.env.METRA_USERNAME,
  password = process.env.METRA_PASSWORD,
  url =
    "https://" +
    username +
    ":" +
    password +
    "@" +
    process.env.METRA_BASEURL +
    process.env.METRA_ALERTS_PATH;

request({ url }, function(error, response, body) {
  console.log(body);
  console.log(error);
});
