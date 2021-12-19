const router = require('express').Router()
const path = require('path')

// leaving home route in for future enhancement options later
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router
