const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const userRouter = require('./routes/user')

app.use(cors())

app.get('/', (req, res) => {
  res.send('This is node service of  basera app!')
})

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})