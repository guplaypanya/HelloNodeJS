const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/user', (req, res) => {
    res.status(200).json({
        name: "Chonlatee",
        NickName: "Sean"
    })
})

app.listen(3333, ()=>{
    console.log("listen on port 333")
})