import ClienteModel from "../models/ClienteModel.js";
import ValidacaoServices from "../services/ClienteValidacao.js";
import ClienteDAO from "../DAO/ClienteDAO.js";

class ClientesController {
    static rotas(app) {
        // Rota para buscar todos os clientes
        app.get("/clientes", async (req, res) => {
            try {
                const clientes = await ClienteDAO.buscarTodosOsClientes();
                res.status(200).json(clientes);
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao buscar clientes" });
            }
        });

        // Rota para buscar cliente pelo id
        app.get("/clientes/:id", async (req, res) => {
            const id = req.params.id;
            try {
                const cliente = await ClienteDAO.buscarClientePorId(id);
                if (cliente) {
                    res.status(200).json(cliente);
                } else {
                    res.status(404).json({ error: true, message: `Cliente não encontrado para o id ${id}` });
                }
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao buscar cliente" });
            }
        });

        // Rota para deletar cliente
        app.delete("/clientes/:id", async (req, res) => {
            const id = req.params.id;
            try {
                const cliente = await ClienteDAO.buscarClientePorId(id);
                if (cliente) {
                    await ClienteDAO.deletarClientePorId(id);
                    res.status(200).json({ error: false });
                } else {
                    res.status(404).json({ error: true, message: `Cliente não encontrado para o id ${id}` });
                }
            } catch (error) {
                res.status(500).json({ error: true, message: "Erro ao deletar cliente" });
            }
        });

        // Rota para inserir um novo cliente
        app.post("/clientes", async (req, res) => {
            const body = req.body;

            // Verifique se todos os campos obrigatórios estão presentes na requisição
            if (!body.nome || !body.email || !body.telefone || body.id_endereco === undefined) {
                res.status(400).json({ error: true, message: "Campos obrigatórios não preenchidos" });
                return; // Encerre a função aqui para evitar a execução do código abaixo
            }

            const clienteModelado = new ClienteModel(body.nome, body.email, body.telefone, body.id_endereco);
            try {
                await ClienteDAO.inserirCliente(clienteModelado);
                res.status(201).json({
                    error: false,
                    message: "Cliente criado com sucesso"
                });
            } catch (error) {
                res.status(503).json({ error: true, message: "Servidor indisponível no momento" });
            }
        });

        /**
         * Rota para atualizar um registro de cliente
         */
        app.put("/clientes/:id", async (req, res) => {
            const id = req.params.id
            const body = req.body
            try {
                ValidacaoServices.validaCamposCliente(body.nome, body.email, body.telefone, body.id_endereco)
                await ValidacaoServices.validarExistencia(id)
                const clienteModelado = new ClienteModel(body.nome, body.email, body.telefone, body.id_endereco)
                await ClienteDAO.AtualizarClientePorId(id, clienteModelado)
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

export default ClientesController;
