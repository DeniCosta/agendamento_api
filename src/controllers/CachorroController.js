import CachorroModel from "../models/CachorroModel.js";
import ValidacaoServices from "../services/CachorroValidacao.js";
import CachorroDAO from "../DAO/CachorroDAO.js";

class CachorroController {
    static rotas(app) {
        // Rota para buscar todos os cachorros
        app.get("/cachorro", async (req, res) => {
            try {
                const cachorro = await CachorroDAO.buscarTodosOsCachorros();
                res.status(200).json(cachorro);
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao buscar cachorro" });
            }
        });

        // Rota para buscar cachorro pelo id
        app.get("/cachorro/:id", async (req, res) => {
            const id = req.params.id;
            try {
                const cachorro = await CachorroDAO.buscarCachorroPorId(id);
                if (cachorro) {
                    res.status(200).json(cachorro);
                } else {
                    res.status(404).json({ error: true, message: `Cachorro não encontrado para o id ${id}` });
                }
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao buscar cachorro" });
            }
        });

        // Rota para deletar cachorro
        app.delete("/cachorro/:id", async (req, res) => {
            const id = req.params.id;
            try {
                const cachorro = await CachorroDAO.buscarCachorroPorId(id);
                if (cachorro) {
                    await CachorroDAO.deletarCachorroPorId(id);
                    res.status(200).json({ error: false });
                } else {
                    res.status(404).json({ error: true, message: `Cachorro não encontrado para o id ${id}` });
                }
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao deletar cachorro" });
            }
        });

        // Rota para inserir um novo cachorro
        app.post("/cachorro", async (req, res) => {
            const body = req.body;

            // Verifique se todos os campos obrigatórios estão presentes na requisição
            if (!body.nome || !body.raca || !body.cor || !body.sexo || !body.peso ) {
                res.status(400).json({ error: true, message: "Campos obrigatórios não preenchidos" });
                return; // Encerre a função aqui para evitar a execução do código abaixo
            }

            const cachorroModelado = new CachorroModel(body.nome, body.raca, body.cor, body.sexo,body.peso);
            try {
                await CachorroDAO.inserirCachorro(cachorroModelado);
                res.status(201).json({
                    error: false,
                    message: "Cachorro criado com sucesso"
                });
            } catch (error) {
                res.status(503).json({ error: true, message: "Servidor indisponível no momento" });
            }
        });

        /**
         * Rota para atualizar um registro de cachorro
         */
        app.put("/cachorro/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                ValidacaoServices.validaCamposCachorro(body.nome, body.raca, body.cor, body.sexo, body.peso)
                await ValidacaoServices.validarExistencia(id)
                const cachorroModelado = new CachorroModel(body.nome, body.raca, body.cor, body.sexo, body.peso)
                await CachorroDAO.AtualizarCachorroPorId(id, cachorroModelado)
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

export default CachorroController;
