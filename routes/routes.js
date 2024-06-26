// Packages imports
const express = require("express");

// Routes imports
const {
  cuteCats,
  postCuteCat,
  lovedKitties,
  getTwoRandomCats,
} = require("../controllers/cute-cats");

const router = express.Router();

router.get("/cute-kitties", cuteCats);
router.get("/loved-kitties", lovedKitties);
router.get("/two-cats-to-love", getTwoRandomCats);
router.post("/post-cuteness", postCuteCat);

module.exports = router;
