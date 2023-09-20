import AdestradorDAO from "../DAO/AdestradorDAO.js"
import AdestradorModel from "../models/AdestradorModel.js"
import ValidacaoServices from "../services/ValidacaoServices.js"


class AdestradorController{
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app){
        /**
         * Rota para buscar todos os Adestradores
         */
        app.get("/adestrador", async (req, res)=>{
            const adestrador = await AdestradorDAO.buscarTodosEmAdestrador()
            res.status(200).json(adestrador)
        })
        
        /**
         * Rota para buscar adestradores pelo id
         */
        app.get("/adestrador/:id", (req, res)=>{
            const id = req.params.id
            const isValid = ValidacaoServices.validarExistencia(id)
            if(isValid){
                const resposta = AdestradorDAO.buscarAdestradorPorId(id)
                res.status(200).json(resposta)
            }
            res.status(404).json({error: true, message: `Adestrador não encontrado para o id ${id}`})
        })

        /**
         * Rota para deletar adestrador
         */
        app.delete("/adestrador/:id", (req, res)=>{
            const id = req.params.id
            const isValid = ValidacaoServices.validarExistencia(id)
            if(isValid){
                AdestradorDAO.deletarAdestradorPorId(id)
                res.status(200).json({error: false})
            }
            res.status(404).json({error: true, message: `Adestrador não encontrado para o id ${id}`})
        })

        /**
         * Rota para inserir um novo adestrador
         */
        app.post("/adestrador", async (req, res)=>{
            const body = Object.values(req.body)
            const isValid = ValidacaoServices.validaCamposAdestrador(...body)
            if(isValid){
                const adestradorModel = new AdestradorModel(...body)
                try {
                    await AdestradorDAO.inserirAdestrador(adestradorModel)
                    res.status(201).json({
                        error: false,
                        message: "Adestrador feito com sucesso"
                    })
                    console.log("tudo pronto")
                } catch (error) {
                    res.status(503).json({error: true, message: `Servidor indisponível no momento`})
                }
            } else {
                res.status(400).json({error: true, message: `Campos invalidos`})
            }
        })

        /**
         * Rota para atualizar um registro já existente na tabela adestrador
         */
        app.put("/adestrador/:id", (req, res)=>{
            const id = req.params.id
            const body = req.body
            const exists = ValidacaoServices.validarExistencia(id)
            const isValid = ValidacaoServices.validaCamposAdestrador(body.nome, body.formacao,body.id_endereco,body.id_agendamento)
            if(exists){
                if(isValid){
                    const adestradorModelo = new AdestradorModel(body.nome,body.formacao,body.id_endereco,body.id_agendamento)
                    AdestradorDAO.AtualizarAdestradorPorId(id, adestradorModelo)
                    res.status(204).json()
                }
                res.status(400).json({error: true, message: `Campos invalidos`})
            }
            res.status(404).json({error: true, message: `Adestrador não encontrado para o id ${id}`})
        })
    }
}

export default AdestradorController
