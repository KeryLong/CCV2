const express = require ('express');
const app = express()
const port = 3333

app.get ('/', (req, res) =>{
    res.send('Welcome to the community clean up version 2 server')
})

app.listen(port,() =>{
    console.log(`CC is listening at http://localhost:${port}`)
})