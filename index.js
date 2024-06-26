require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const catRoutes = require("./routes/routes");

app.get("/", (req, res) => {
  try {
    console.log("Welcome to the cuteness overload server 🐱");
    return res
      .status(200)
      .json({ message: "Welcome to the cuteness overload server 🐱" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.use(catRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT ${process.env.PORT} 🚀`);
});
