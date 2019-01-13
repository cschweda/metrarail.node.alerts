const request = require("request");
const jsonfile = require("jsonfile");
const file = "./alerts.json";
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
  console.dir(body);
  console.log(error);
  jsonfile.writeFileSync(file, body);
});
