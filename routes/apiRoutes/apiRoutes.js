const router = require("express").Router();
const fs = require('fs');

// TODO: respond with all notes from db.json
router.get("/notes", function(req, res) {    
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data);
        res.json(notes);
    })
    console.log("API!");

});

module.exports = router;