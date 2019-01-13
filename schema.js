var GenerateSchema = require("generate-schema");
var schema = GenerateSchema.mongoose("Alerts", [
  {
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
  },
  {
    id: "944493f8-b649-4fe0-84b7-e864b59e13c3",
    is_deleted: false,
    trip_update: null,
    vehicle: null,
    alert: {
      active_period: [
        {
          start: {
            low: "2019-01-13T16:27:59.000Z",
            high: 0,
            unsigned: true
          },
          end: {
            low: "2019-01-13T17:37:00.000Z",
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
          trip: {
            trip_id: "RI_RI110_V7_C",
            route_id: "RI",
            direction_id: null,
            start_time: "10:15:00",
            start_date: "2019-01-13",
            schedule_relationship: 0
          },
          stop_id: null
        }
      ],
      cause: 1,
      effect: 8,
      url: {
        translation: [
          {
            text:
              "http://metrarail.com/metra/en/home.html?Twitter=0&Email=0&Website=1&OnBoard=0",
            language: "en-US"
          }
        ]
      },
      header_text: {
        translation: [
          {
            text:
              "Metra Alert RI - Inbound Train #110 sched. to arrive Chicago at 11:25 AM - 12 minute delay. ",
            language: "en-US"
          }
        ]
      },
      description_text: {
        translation: [
          {
            text:
              "Train #110, scheduled to arrive Chicago at 11:25 AM, is operating 12 minutes behind schedule. ",
            language: "en-US"
          }
        ]
      }
    }
  },
  {
    id: "a3141760-dc1a-44ba-9b09-64df8de34fd2",
    is_deleted: false,
    trip_update: null,
    vehicle: null,
    alert: {
      active_period: [
        {
          start: {
            low: "2019-01-13T16:52:31.000Z",
            high: 0,
            unsigned: true
          },
          end: {
            low: "2019-01-13T18:08:00.000Z",
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
          trip: {
            trip_id: "UP-W_UW503_V8_C",
            route_id: "UP-W",
            direction_id: null,
            start_time: "10:40:00",
            start_date: "2019-01-13",
            schedule_relationship: 0
          },
          stop_id: null
        }
      ],
      cause: 1,
      effect: 8,
      url: {
        translation: [
          {
            text:
              "http://metrarail.com/metra/en/home.html?Twitter=0&Email=0&Website=1&OnBoard=0",
            language: "en-US"
          }
        ]
      },
      header_text: {
        translation: [
          {
            text:
              "Metra Alert UP-W - Outbound Train #503 departing Chicago at 10:40 AM - 14 minute delay.",
            language: "en-US"
          }
        ]
      },
      description_text: {
        translation: [
          {
            text:
              "Train #503, scheduled to depart Chicago at 10:40 AM, is operating 14 minutes behind schedule.",
            language: "en-US"
          }
        ]
      }
    }
  },
  {
    id: "cms_alert121",
    is_deleted: false,
    alert: {
      url: {
        translation: [
          {
            text:
              "metrarail.com/riding-metra/service-updates?Source=0&Website=1&OnBoard=0&Email=1&Twitter=0"
          }
        ]
      },
      informed_entity: [
        {
          route_id: "RI"
        }
      ],
      active_period: [
        {
          start: {
            low: "2019-01-10T11:02:00"
          },
          end: {
            low: "2019-01-28T10:00:00"
          }
        }
      ],
      header_text: {
        translation: [
          {
            text:
              "Metra Alert RI - New Rock Island Line schedule will go into effect Monday, January 28, 2019",
            language: "en-US"
          }
        ]
      },
      description_text: {
        translation: [
          {
            text:
              '<p style="margin:0in 0in 8pt"><span style="font-size:11pt"><span style="line-height:107%"><span style="font-family:&quot;Calibri&quot;,&quot;sans-serif&quot;">A new Rock Island Line schedule that includes changes necessary for the new Positive Train Control (PTC) safety system, as well as some service enhancements such as new express trains will start on a trial basis beginning Monday, January 28, 2019. Operations and ridership patterns will be evaluated over the next few months. Customers are urged to view the new schedule <a href="https://metrarail.com/sites/default/files/assets/metra_rid_pilot_schedule.pdf">here</a> to see if their train or station stop is affected. No changes were made to the weekend schedule.</span></span></span></p>',
            language: "en-US"
          }
        ]
      }
    }
  }
]);

console.log(schema);
