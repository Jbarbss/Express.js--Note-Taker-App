// LOAD DATA
const { v4: uuid } = require('uuid')
const fs = require('fs')

// API ROUTING:

module.exports = (app) => {

    //* GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
    let noteDb = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // API GET Requests
   
    app.get('/api/notes', (req, res) => res.json(noteDb));

    // API POST Requests
    app.post('/api/notes', (req, res) => {
        // console.log(req.body);
        let id = uuid();
        let newNote = req.body;
        newNote.id = id;
        
        noteDb.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(noteDb), () => {

        });
        console.log(noteDb);

        // Removes the last index
        res.json(noteDb.slice(-1));
      
    });

    //Delete post
    app.delete('/api/notes/:id', (req, res) => {
        console.log(req.params.id);
        noteDb = noteDb.filter( (note) =>  {
            return note.id != req.params.id 
        });
        fs.writeFile('./db/db.json', JSON.stringify(noteDb), () => {
            res.json(noteDb);
        });
    });


};



