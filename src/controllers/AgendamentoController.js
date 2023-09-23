import AgendamentoModel from "../models/AgendamentoModel.js"
import ValidacaoServices from "../services/AgendamentoValidacao.js"
import AgendamentoDAO from "../DAO/AgendamentoDAO.js"


class AgendamentoController {
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app) {
        /**
         * Rota para buscar todos 
         */
        app.get("/agendamento", async (req, res) => {
            const agendamento = await AgendamentoDAO.buscarTodosEmAgendamento()
            res.status(200).json(agendamento)
        })

        /**
         * Rota para buscar usuários pelo id
         */
        app.get("/agendamento/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await AgendamentoDAO.buscarAgendamentoPorId(id)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json({id: id, ...error})
            }
        })

        /**
         * Rota para deletar agendamento
         */
        app.delete("/agendamento/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoServices.validarExistencia(id)
                AgendamentoDAO.deletarAgendamentoPorId(id)
                res.status(200).json({ error: false })
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir um novo agendamento
         */
        app.post("/agendamento", async (req, res) => {
            const body = Object.values(req.body)
            try {
                ValidacaoServices.validaCamposAgendamento(...body)
                const agendamentoModelado = new AgendamentoModel(...body)
                await AgendamentoDAO.inserirAgendamento(agendamentoModelado)
                res.status(201).json({
                    error: false,
                    message: "Agendamento criado com sucesso"
                })
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        /**
         * Rota para atualizar um registro já existente na tabela agendamento
         */
        app.put("/agendamento/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                ValidacaoServices.validaCamposAgendamento(body.duracao, body.dia, body.hora, body.id_cachorro, body.id_adestrador)
                await ValidacaoServices.validarExistencia(id)
                const agendamentoModelado = new AgendamentoModel(body.duracao, body.dia, body.hora, body.id_cachorro, body.id_adestrador)
                AgendamentoDAO.AtualizarAgendamentoPorId(id, agendamentoModelado)
                res.status(204).json()
            } catch (error) {
                if(error.message == "Campos invalidos"){
                    res.status(400).json({error: error.message})
                } else {
                    res.status(404).json({id: id, ...error})
                }
            }
        })
    }
}

export default AgendamentoController