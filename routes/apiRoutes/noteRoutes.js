const router = require("express").Router();
const { createNote,  deleteNote} = require('../../lib/notes');
const { notes } = require('../../Develop/db/db');

router.get('/notes', (req, res) => {
    let savedNotes = notes;
    res.json(savedNotes);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})


module.exports = router;