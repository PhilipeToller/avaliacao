const express = require("express")

const routes = express.Router()

let lista = [
    {
    "id": 1,
    "descricao": "Camiseta",
    "preco": 29.99,
    "cores": ["preto", "branco", "cinza"]
    },
    {
    "id": 2,
    "descricao": "Calça Jeans",
    "preco": 79.99,
    "cores": ["azul claro", "azul escuro"]
    },
    {
    "id": 3,
    "descricao": "Tênis Esportivo",
    "preco": 149.99,
    "cores": ["preto", "branco", "cinza", "azul"]
    },
    {
    "id": 4,
    "descricao": "Jaqueta de Couro",
    "preco": 99.99,
    "cores": ["preto", "marrom"]
    }]

routes.get("/",(req,res)=>{ //get = é usado para buscar
    res.status(200).json(lista)
})

routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1])
})

routes.delete("/:id",(req,res)=>{ //delete = é usado para apagar
    lista.splice(req.params.id-1,1)
    res.status(200).redirect("/")
})

module.exports = routes