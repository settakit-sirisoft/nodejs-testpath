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

app.get('/testpath2', (req, res) => {
  res.send('hello test path 2').status(200)
})

app.get('/testpath3', (req, res) => {
  res.send('hello test path 3').status(200)
})

app.get('/testpath4', (req, res) => {
  res.send('hello test path 4').status(200)
})

// app.get('/testpath5', (req, res) => {
//   res.send('hello test path 5').status(200)
// })

app.get('/testpath6', (req, res) => {
  res.send('hello test path 6').status(200)
})

// app.get('/*', (req, res) => {
//     res.redirect('/')
// })

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})