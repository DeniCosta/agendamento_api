import CachorroModel from "../models/CachorroModel.js";
import CachorroDAO from "../DAO/CachorroDAO.js"
// import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class CachorroController {
  /**
   * Método para centralização de rotas no controller
   * @param {Express} app 
   */
  static rotas(app) {

    app.get("/cachorro", async (req, res) => {
      const cachorro = await CachorroDAO.buscarTodosOscachorros()
      res.status(200).json(cachorro)
    })

    app.get("/cachorro/:id", async (req, res) => {
      const id = req.params.id
      try {
        const resposta = await CachorroDAO.buscarcachorroPorId(id)
        res.status(200).json(resposta)
      } catch (error) {
        res.status(404).json({ id: id, ...error })
      }
    })

    app.delete("/cachorro/:id", async (req, res) => {
      const id = req.params.id
      try {
        await ValidacaoServices.validarExistencia(id)
        CachorroDAO.deletarcachorroPorId(id)
        res.status(200).json({ error: false })
      } catch (error) {
        res.status(404).json({ id: id, ...error })
      }
    })

    app.post("/cachorro", async (req, res) => {
      const body = Object.values(req.body)
      try {
        ValidacaoServices.validaCamposCachorro(...body)
        const cachorroModelado = new CachorroModel(...body)
        await CachorroDAO.inserirCachorro(cachorroModelado)
        res.status(201).json({
          error: false,
          message: "Novo cachorro inserido no banco de dados"
        })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
    })

    app.put("/cachorro/:id", async (req, res) => {
      const id = req.params.id
      const body = req.body
      try {
        ValidacaoServices.validaCamposCachorro(body.nome, body.raca, body.cor, body.sexo, body.peso)
        await ValidacaoServices.validarExistencia(id)
        const cachorroModelado = new CachorroModel(body.nome, body.raca, body.cor, body.sexo, body.peso)
        CachorroDAO.AtualizarcachorroPorId(id, cachorroModelado)
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

export default CachorroController
