const express = require('express');
const PORT = process.env.PORT || 3001;
const db = require('./db/db.json');
const app = express();
const fs = require('fs');
var path = require("path");


const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// TODO: API ROUTES
app.use("/api", apiRoutes);
// html routes
app.use("/", htmlRoutes);




// listen on port
app.listen(PORT, () => {
console.log(`Example app listening at http://localhost:${PORT}`);
});
