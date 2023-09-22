import EnderecoModel from "../models/EnderecoModel.js"
import ValidacaoServices from "../services/EnderecoValidacao.js"
import EnderecoDAO from "../DAO/EnderecoDAO.js"

class EnderecoController {
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app) {
        /**
         * Rota para buscar todos os endereços
         */
        app.get("/endereco", async (req, res) => {
            const endereco = await EnderecoDAO.buscarTodosOsEnderecos()
            res.status(200).json(endereco)
        })

        /**
         * Rota para buscar endereços pelo id
         */
        app.get("/endereco/:id", async (req, res) => {
            const id = req.params.id
            try {
                const resposta = await EnderecoDAO.buscarEnderecoPorId(id)
                res.status(200).json(resposta)
            } catch (error) {
                res.status(404).json({id: id, ...error})
            }
        })

        /**
         * Rota para deletar endereço
         */
        app.delete("/endereco/:id", async (req, res) => {
            const id = req.params.id
            try {
                await ValidacaoServices.validarExistencia(id)
                EnderecoDAO.deletarEnderecoPorId(id)
                res.status(200).json({ error: false })
            } catch (error) {
                res.status(404).json({ id: id, ...error })
            }
        })

        /**
         * Rota para inserir um novo endereço
         */
        app.post("/endereco", async (req, res) => {
            const body = Object.values(req.body)
            try {
                ValidacaoServices.validaCamposEndereco(...body)
                const enderecoModelado = new EnderecoModel(...body)
                await EnderecoDAO.inserirEndereco(enderecoModelado)
                res.status(201).json({
                    error: false,
                    message: "Endereço adicioando com sucesso"
                })
            } catch (error) {
                res.status(400).json({error: error.message})
            }
        })

        /**
         * Rota para atualizar um registro já existente na tabela endereços
         */
        app.put("/endereco/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                ValidacaoServices.validaCamposEndereco(body.cep, body.numero, body.complemento)
                await ValidacaoServices.validarExistencia(id)
                const enderecoModelado = new EnderecoModel(body.cep, body.numero, body.complemento)
                EnderecoDAO.AtualizarEnderecoPorId(id, enderecoModelado)
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

export default EnderecoController