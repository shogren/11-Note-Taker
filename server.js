const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// importing routes
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// API ROUTES
app.use("/api", apiRoutes);
// html routes
app.use("/", htmlRoutes);

// listen on port
app.listen(PORT, () => {
console.log(`Example app listening at http://localhost:${PORT}`);
});
