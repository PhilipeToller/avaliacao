const express = require("express")
const routes = require("./rotas")

const server = express()


server.use(express.json())
server.use(routes)
server.use(express.urlencoded({extended:true}))


server.listen(3000,()=>{
    console.log("Servidor em execução...")
})