const express = require("express");
const app = express();
app.use("/hello", (req, res) => {  
    res.send("///gyhd=bujhuuiuqw")
})
app.use("/", (req, res) => {
    res.send("Nmasteyb salkshi")
})



app.use("/test", (req, res) => {
    res.send("bjguu//gyhdcguysidxgwsiusdiuqw")
})

app.listen(3000, () => {
    console.log("server is listening one port 3000");
})
