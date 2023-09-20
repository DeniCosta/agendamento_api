import CachorroModel from "../CachorroDAO.js";
import DAO from "./DAO.js";

const Cachorro_TABELA = "Cachorro"

class CachorroDAO extends DAO {
  /**
   * @param {CachorroModel} data 
   */
  static async inserirCachorro(data) {
    const dataValues = Object.values(data)
    const query = `
        INSERT INTO Cachorro (nome, raca, cor, sexo, porte, peso, temperamento, statusVacina) VALUES (?, ?, ?, ?, ?, ?, ?, ?))
        `
    const result = await this.inserir(query, dataValues)
    return result
  }

  /**
   * @returns {Array<CachorroModel>}
   */
  static async buscarTodosOs() {
    return await this.buscar(Cachorro_TABELA)
  }

  /**
   * Método de busca de registros específicos na tabela Cachorro através de um identificador
   * @param {string} id 
   * @returns {CachorroModel}
   */
  static buscarCachorroPorId(id) {
    return this.buscarPorId(Cachorro_TABELA, id)
  }

  /**
   * Método de deleção de registros específicos na tabela Cachorro através de um identificador
   * @param {string} id 
   */
  static deletarCachorroPorId(id) {
    this.deletarPorId(Cachorro_TABELA, id)
  }

  /**
   * Atualiza um registro específico da tabela Cachorro através de um identificador
   * @param {string} id 
   * @param {any} data 
   */
  static AtualizarCachorroPorId(id, data) {
    this.atualizarPorId(Cachorro_TABELA, id, data)
  }
}

export default CachorroDAO;