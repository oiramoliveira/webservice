const express = require ('express')
const app = express()

const port = 3000

app.post('/hello', (req, res) => { //arrow function
    res.send('Hello World 1')
})

app.listen(port,  () => {// => arrow function
    console.log(`App rodando na porta: ${port} `)
})