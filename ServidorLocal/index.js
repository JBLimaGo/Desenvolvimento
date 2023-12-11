const express = require('express')
const app = express();
const port = 8000;

app.get('/' , (req, res)=>{
    res.send('<h1> Hello Word, Sejam todos bem vindos ao primeiro Servidor Express</h1>')
})

app.listen(port, ()=>{
    console.log('Servidor iniciado com sucesso')
})