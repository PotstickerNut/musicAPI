const mongoose = require("mongoose");

const musicSchema = mongoose.Schema({
  created_by: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },

  artist: {
    type: String,
    required: true,
  },

  album: {
    type: String,
    required: true,
  },

  song: {
    type: String,
    required: true,
  },

  album_year: {
    type: String,
  },
});

module.exports = mongoose.model("Music", musicSchema);
