const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/testpath', (req, res) => {
    res.send('Hello World TestPath')
})

app.get('/healthz', (req, res) => {
  res.send('healthz...').status(200)
})

app.get('/*', (req, res) => {
    res.redirect('/')
})

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})