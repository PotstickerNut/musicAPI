const express = require("express");
const musicModel = require("../models/musicSchema");

const router = express.Router();

// ======= Get songs =======
router.get("/", async (req, res) => {
  try {
    const song = musicModel.find();
    res.status(200).json(song);
  } catch (error) {
    console.error(error);
  }
});
