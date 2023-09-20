import CachorroModel from "../model/CachorroModel.js";
// import DatabaseMetodos from "../utils/DatabaseMetodos.js";

class CachorroController {
  /**
   * 
   * @param {Express} app 
   */
  static rotas(app) {
    app.post('/adicionar', (req, res) => {
      const cachorro = new CachorroModel(req.body)
    })
  }
}

export default CachorroController