import CachorroModel from "../models/CachorroModel.js";
import DAO from "./DAO.js";

const CACHORRO_TABELA = "cachorro"

class CachorroDAO extends DAO {
  /**
   * @param {CachorroModel} data 
   * @returns {boolean}
   */
  static async inserirCachorro(data) {
    const dataValues = Object.values(data)
    const query = `
        INSERT INTO ${CACHORRO_TABELA} (nome, raca, cor, sexo, peso) VALUES (?, ?, ?, ?, ?);
        `
    const result = await this.inserir(query, dataValues)
    return result
  }

  
    /**
     * @returns {Array<CachorroModel>}
     */
    static async buscarTodosOsCachorros(){
      const query = `
      SELECT * FROM ${CACHORRO_TABELA};
      `;
      return await this.buscar(query);
  }

  /**
   * Método de busca de registros específicos na tabela Cahorro através de um identificador
   * @param {string} id 
   * @returns {CachorroModel}
   */
  static async buscarCachorroPorId(id) {
      const query = `
      SELECT * FROM ${CACHORRO_TABELA} WHERE id=?;
      `;
      return await this.buscarPorId(query, id);
  }

  /**
   * Método de deleção de registros específicos na tabela Cachorro através de um identificador
   * @param {string} id 
   */
  static async deletarCachorroPorId(id) {
      const query = `DELETE FROM ${CACHORRO_TABELA} WHERE id=?;`;
      await this.deletarPorId(query, id);
  }

  /**
   * Atualiza um registro específico da tabela Cachorro através de um identificador
   * @param {string} id 
   * @param {any} data 
   */
  static async AtualizarCachorroPorId(id, data) {
      const query = `UPDATE ${CACHORRO_TABELA} SET nome=?, raca=?, cor=?, sexo=?, peso=? WHERE id=?;`;
      await this.atualizarPorId(query, [...Object.values(data), id]);
  }
}

export default CachorroDAO;
