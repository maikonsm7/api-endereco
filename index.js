const express = require('express')
const port = 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/:cep', (req, res)=>{
    const cep = req.params.cep
    (async ()=>{
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = res.json()
        res.status(200).json({data})
    })()
})

app.listen(port, ()=>{
    console.log(`Servidor online na porta ${port}`)
})