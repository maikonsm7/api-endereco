const express = require('express')
const axios = require('axios')
const port = 3000

const app = express()

app.use(express.json())

// app.get('/:cep', async(req, res)=>{
//     const cep = req.params.cep
//     try {
//         const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
//         res.json(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// })
app.get('/:cep', (req, res)=>{
    const cep = req.params.cep

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err }))   
})

app.listen(port, ()=>{
    console.log(`Servidor online. http://localhost:${port}`)
})