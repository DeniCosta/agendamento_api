import AdestradorDAO from "../DAO/AdestradorDAO.js"
import AdestradorModel from "../models/AdestradorModel.js"
import ValidacaoServices from "../services/AdestradorValidacao.js"


class AdestradorController {
    /**
     * Método para centralização de rotas no controller
     * @param {Express} app 
     */
    static rotas(app) {
        /**
         * Rota para buscar todos os Adestradores
         */
        app.get("/adestrador", async (req, res) => {
            const adestrador = await AdestradorDAO.buscarTodosEmAdestrador()
            res.status(200).json(adestrador)
        })

        /**
         * Rota para buscar adestradores pelo id
         */
        app.get("/adestrador/:id", async (req, res) => {
            const id = req.params.id;
            try {
                const adestrador = await AdestradorDAO.buscarAdestradorPorId(id);
                if (adestrador) {
                    res.status(200).json(adestrador);
                } else {
                    res.status(404).json({ error: true, message: `Adestrador não encontrado para o id ${id}` });
                }
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao buscar adestrador" });
            }
        })

        /**
         * Rota para deletar adestrador
         */
        app.delete("/adestrador/:id", async (req, res) => {
            const id = req.params.id
            try {
                const adestrador = await AdestradorDAO.buscarAdestradorPorId(id);
                if (adestrador) {
                    await AdestradorDAO.deletarAdestradorPorId(id);
                    res.status(200).json({ error: false });
                } else {
                    res.status(404).json({ error: true, message: `Adestrador não encontrado para o id ${id}` });
                }
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao deletar adestrador" });
            }
        })

        // Rota para inserir um novo adestrador
        app.post("/adestrador", async (req, res) => {
            const body = req.body;

            // Verifique se todos os campos obrigatórios estão presentes na requisição
            if (!body.nome || !body.formacao || body.id_agendamento === undefined || body.id_endereco === undefined) {
                res.status(400).json({ error: true, message: "Campos obrigatórios não preenchidos" });
                return; // Encerre a função aqui para evitar a execução do código abaixo
            }

            const adestradorModelado = new AdestradorModel(body.nome, body.formacao, body.id_agendamento, body.id_endereco);
            try {
                await AdestradorDAO.inserirAdestrador(adestradorModelado);
                res.status(201).json({
                    error: false,
                    message: "Cliente criado com sucesso"
                });
            } catch (error) {
                res.status(503).json({ error: true, message: "Servidor indisponível no momento" });
            }
        });

        /**
         * Rota para atualizar um registro de um adestrador
         */
        app.put("/adestrador/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                ValidacaoServices.validaCamposAdestrador(body.nome, body.formacao, body.id_agendamento, body.id_endereco)
                await ValidacaoServices.validarExistencia(id)
                const adestradorModelado = new AdestradorModel(body.nome, body.formacao, body.id_agendamento, body.id_endereco)
                await AdestradorDAO.AtualizarAdestradorPorId(id, adestradorModelado)
                res.status(204).json()
            } catch (error) {
                if (error.message == "Campos invalidos") {
                    res.status(400).json({ error: error.message })
                } else {
                    res.status(404).json({ id: id, ...error })
                }
            }
        })
    }
}

export default AdestradorController
