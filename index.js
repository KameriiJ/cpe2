const express = require('express')
const app = express()
const port = 16915

app.get('/', (req, res) =>
  res.send('Greetings from ladyusa...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
