var GenerateSchema = require("generate-schema");
var schema = GenerateSchema.mongoose("Alerts", {
  id: "9e5624e5-feae-4349-910f-ddbf0c5aa312",
  is_deleted: false,
  trip_update: null,
  vehicle: null,
  alert: {
    active_period: [
      {
        start: {
          low: "2019-01-13T15:37:28.000Z",
          high: 0,
          unsigned: true
        },
        end: {
          low: "2019-01-14T09:00:00.000Z",
          high: 0,
          unsigned: true
        }
      }
    ],
    informed_entity: [
      {
        agency_id: null,
        route_id: null,
        route_type: null,
        trip: null,
        stop_id: "JEFFERSONP"
      }
    ],
    cause: 1,
    effect: 8,
    url: {
      translation: [
        {
          text:
            "http://metrarail.com/metra/en/home.html?Twitter=1&Website=1&OnBoard=0&Email=1",
          language: "en-US"
        }
      ]
    },
    header_text: {
      translation: [
        {
          text:
            "Metra Alert  - Jefferson Park platform change - train #706 will board from the long sheltered, center island platform at Jefferson Park ",
          language: "en-US"
        }
      ]
    },
    description_text: {
      translation: [
        {
          text:
            "Train #706 scheduled to arrive Chicago at 10:23 AM will board from the long sheltered, center island platform at Jefferson Park.  Attempted transmission of boarding information may not be heard at this station. ",
          language: "en-US"
        }
      ]
    }
  }
});

console.log(schema);
