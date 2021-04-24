//Dependencies required
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/public"));

//required routes
require ("./routes/apiRoutes")(app);
require ("./routes/htmlRoutes")(app);

//server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });