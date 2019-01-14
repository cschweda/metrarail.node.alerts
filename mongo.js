const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/metra-alerts");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

db.once("open", function(callback) {
  console.log("Connection succeeded");
});

const Schema = mongoose.Schema;
const alertSchema = new Schema({
  id: {
    type: "String",
    unique: true,
    required: true
  },
  is_deleted: {
    type: "Boolean"
  },
  alert: {
    url: {
      translation: {
        type: ["Mixed"]
      }
    },
    informed_entity: {
      type: ["Mixed"]
    },
    active_period: {
      type: ["Mixed"]
    },
    header_text: {
      translation: {
        type: ["Mixed"]
      }
    },
    description_text: {
      translation: {
        type: ["Mixed"]
      }
    }
  }
});
