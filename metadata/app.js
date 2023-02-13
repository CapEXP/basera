const express = require('express')
var cors = require('cors')
const app = express()
const port = 3001
const metadataRouter = require('./routes/metadata')

app.use(cors())

app.get('/', (req, res) => {
  res.send('This is meta service of basera app!')
})

app.use('/metadata', metadataRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})