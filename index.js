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
  console.dir(body);
  console.log(error);
});

/**
 * Mongoose schema
 */

/*
{
	id: {
    type: 'String',
    unique: true,
    required: true
	},
	is_deleted: {
		type: 'Boolean'
	},
	alert: {
		url: {
			translation: {
				type: [
					'Mixed'
				]
			}
		},
		informed_entity: {
			type: [
				'Mixed'
			]
		},
		active_period: {
			type: [
				'Mixed'
			]
		},
		header_text: {
			translation: {
				type: [
					'Mixed'
				]
			}
		},
		description_text: {
			translation: {
				type: [
					'Mixed'
				]
			}
		}
	}
}*/
