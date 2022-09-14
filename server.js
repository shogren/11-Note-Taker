const express = require('express');
const PORT = 3001;
const db = require('./db/db.json');
const app = express();
const path = require('path');
const fs = require('fs');
const router = require('express').Router();
let { notesArray } = require('./db/db.json');

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// TODO: MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO: HTML ROUTES
// handles /notes
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
// handles everything else
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// TODO: API ROUTES






// used in getNotes()
app.get('api/notes', (req, res) => {
    res.json(db);
  });

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