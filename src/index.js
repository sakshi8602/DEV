const express = require("express");

const app = express();

const {adminAuth, userAuth} = require("./middlewares/auth");

app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("user data sent");
  }
);
app.get("/admin/getAllData", (req, res) => {
  res.send("all data sent");
  }
);
app.get("/admin/deleteUser", (req, res) => {
  // logic of fetching all data
    res.send("Delete a user");
  }
);

app.listen(3000, () => {
  console.log("server is listening one port 3000");
});
