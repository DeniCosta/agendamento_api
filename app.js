import express from "express";

import AdestradorController from "./src/controllers/AdestradorController.js"
import AgendamentoController from "./src/controllers/AgendamentoController.js"
import CachorroController from "./src/controllers/CachorroController.js"
import ClienteController from "./src/controllers/ClienteController.js"
import EnderecoController from "./src/controllers/EnderecoController.js"

import cors from "cors";

/* Inicialização do Express */
const app = express()

/* Variável de alocação de porta (PORT) */
const port = process.env.PORT || 3000

/* Levante do servidor da API */
app.listen(port, ()=>{
    console.log(`Servidor disponível em: http://localhost:${port}`)
})

/* Midleware para reconhecimento do formato JSON */
app.use(express.json())
app.use(cors('*'))

/* Chamada das rotas controller */
AdestradorController.rotas(app)
AgendamentoController.rotas(app)
CachorroController.rotas(app)
ClienteController.rotas(app)
EnderecoController.rotas(app)