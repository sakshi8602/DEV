const express = require("express");
const app = express();

// app/use("/route", rH, rH2, rH3, rH4, rH5, rH6 )
app.use(
  "/user",
  [
    (req, res, next) => {
      console.log("Handling the route user!!");
      // res.send("Response!!");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 2!!");
      // res.send("2nd Response!!");
      next();
    },
  ],
  (req, res, next) => {
    console.log("Handling the route user 3!!");
    // res.send("2nd Response!!");
    next();
  },
  (req, res, next) => {
    console.log("Handling the route user 4!!");
    // res.send("2nd Response!!");
    next();
  }
);

app.listen(3000, () => {
  console.log("server is listening one port 3000");
});
