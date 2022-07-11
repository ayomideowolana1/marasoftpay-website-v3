const express = require("express");
const app = express();
const log = require("ay-logger");
const router = require("./routes/route")

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/",router)


app.listen(3000, () => {
  log("Listening...");
});


