const express = require('express')

const router = express.Router()

router.get('/:folder/:type/:id', function (req, res, next) {
  const typeFolder = req.params.type + 's'
  const url = `../${req.params.folder}/${typeFolder}/${req.params.id}.json`
  console.log('>>>>>>>> url: ', url)
  const layout = require(url)
  res.json(layout)
})

module.exports = router