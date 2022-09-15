const router = require("express").Router();
const fs = require('fs');
const path = require('path');

// TODO: respond with all notes from db.json
router.get("/notes", function(req, res) {    
    console.log("GET WORKS!");
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) {
            console.log(err);
        }
    //     // console.log("from GET: " + data);
        let notes = JSON.parse(data);
    //     // res.json(notes);
        // res.json(notes);
        return Promise.resolve(res.json(notes));

        
    //     // res.status(200).json(data);
    
    })

    // const response = {
    //     status: 'success',
    //     body: notes,
    //   };
  
    //   console.log(response);
    //   res.status(201).json(response);
  
});

// TODO: POST a new note on save
router.post("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) {
            console.log(err);
        }
        const note = JSON.parse(data);
        const noteData = req.body;
        const newNote = {
            title: noteData.title,
            text: noteData.text
        };
        note.push(newNote);
        res.json(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(note, null, 2), function(err) {
            if (err) throw err;
        });
    });
    console.log("POST!")
});

module.exports = router;