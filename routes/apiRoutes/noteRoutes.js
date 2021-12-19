// Router will append /api to each URL
const router = require('express').Router()
// uuid npm package creates unique ids, call with uuidv4()
const { v4: uuidv4 } = require('uuid')
const notesObj = require('../../db/db.json')

// add GET /api/notes route to read db.json file and return all saved notes as JSON
router.get('/notes', (req, res) => {
  let results = notesObj
  res.json(results)
})

// add POST /api/notes route to receive new note to save on request body, add it to the db.json file, and return new note to client
// need to give new notes unique ids

// OPTIONAL: create DELETE /api/notes/:id route

module.exports = router
