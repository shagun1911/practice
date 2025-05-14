require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/shagunji', (req, res) => {
  console.log('Shagun route accessed');
  res.send('Hello ji twitter!');
});

app.get('/login', (req,res) => {
    res.send('<h1>please loogin at chai or code</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
