var express = require('express')
var router = express.Router()
const bookDao = require('../dao/BookDao')

router.get('/', function(req, res, next) {
  bookDao.findAllBooks((err, allbooks) => {
    res.json(allbooks)
  })
})

router.post('/', function(req, res, next) {
  bookDao.addBook(req.body, (err, nb) => {
    res.json(nb)
  })
})

router.delete('/:id', function(req, res, next) {
  let id = req.params.id
  bookDao.deleteBookById(id, err => {
    console.log(id)
    if (!err) res.json({})
    else {
      res.json(err)
    }
  })
})

module.exports = router
