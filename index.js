const express = require("express");
const app = express();

app.use("/", (req, res) => {
  try {
    const { diceVal, selectVal } = req.body;
    if (diceVal == selectVal) {
      return res.status(200).send({ message: "Bet Matched Successfully!" });
    } else {
      return res.status(200).send({ message: "Bet Match Failed" });
    }
  } catch (err) {
    return res
      .status(200)
      .send({ message: "Internal Server Error", error: err.message });
  }
});
