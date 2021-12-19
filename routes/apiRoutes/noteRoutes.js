// Router will append /api to each URL
const router = require('express').Router()
const fs = require('fs')
const path = require('path')
// uuid npm package creates unique ids, call with uuidv4()
const { v4: uuidv4 } = require('uuid')
const notesArr = require('../../db/db.json')

// add GET /api/notes route to read db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
  res.json(notesArr)
})

// add POST /api/notes route to receive new note to save on request body, add it to the db.json file, and return new note to client
// need to give new notes unique ids
router.post('/notes', (req, res) => {
  // get new note title and text
  const newNote = req.body
  // assign new note a unique id
  req.body.id = uuidv4()
  // push new note with id to notes db
  notesArr.push(newNote)
  // write completed note to db.json
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify(notesArr, null, 2)
  )
  // return new note to client
  res.json(newNote)
})

// OPTIONAL: create DELETE /api/notes/:id route
router.delete('/notes/:id', (req, res) => {
  // find note object in db.json with matching id
  const deleteId = req.params.id
  // remove item with this id
  const filteredNotes = notesArr.filter(note => note.id === !deleteId)
  console.log(filteredNotes)
  // rewrite db.json file with updated array
  // fs.writeFileSync(
  //   path.join(__dirname, '../../db/db.json'),
  //   JSON.stringify(filteredNotes, null, 2)
  // )
  // send updated notes list to client
  // res.json(filteredNotes)
})

module.exports = router
