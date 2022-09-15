const express = require('express');
const PORT = 3001;
const db = require('./db/db.json');
const app = express();

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// html routes
app.use("/", htmlRoutes);

// TODO: API ROUTES
app.use("/api", apiRoutes);


// listen on port
app.listen(PORT, () => {
console.log(`Example app listening at http://localhost:${PORT}`);
});

//? exmaple api calls being made to these routes 
// const getNotes = () =>
//   fetch('/api/notes', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

// const saveNote = (note) =>
//   fetch('/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(note),
//   });

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });