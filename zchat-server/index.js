const express = require("express")
const dotenv= require('dotenv')
const app = express()
dotenv.config()
const port = process.env.port || 7000
const {chats}= require('./data')


app.get('/chats', (req, res)=>{
    res.send(chats)
})
app.get('/chats', (req, res)=>{
    res.send(chats)
})
app.get('/chats/:id', (req, res)=>{
    const singleChat=chats.find(c =>c._id === req.params.id)
    res.send(singleChat)
})






app.get('/', (req, res)=>{
    res.send(`ZCHAT server running in port ${7000}`)
})

app.listen(port, ()=>{
    console.log(`zchat server listening on ${7000}`);
})