const router = require("express").Router();
const fs = require('fs');

// GET responds with all notes from db.json
router.get("/notes", function(req, res) {   
     
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) {
            console.log(err);
        }
        let notes = JSON.parse(data);
        res.json(notes);
    })

    res.status(201);
});

// POST a new note on save
router.post("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) {
            console.log(err);
        }
        const note = JSON.parse(data);
        const noteData = req.body;

        const newNote = {
            title: noteData.title,
            text: noteData.text,
            id: Date.now()
        };

        note.push(newNote);
        res.json(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(note, null, "  "), function(err) {
            if (err) throw err;
        });
    });
    
    res.status(201);
});

// DELETE the note when passing an id
router.delete("/notes/:id", (req, res) => {
    let noteData = fs.readFileSync('./db/db.json');
    let notes = JSON.parse(noteData);

    const newNotes = notes.filter(note => note.id !== parseInt(req.params.id));

   fs.writeFile("./db/db.json", JSON.stringify(newNotes, null, "  "), function(err) {
    if (err) throw err;
     
    res.json(newNotes)   
   }); 
 });

module.exports = router;