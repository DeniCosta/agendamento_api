import CachorroModel from "../models/CachorroModel.js";
import DAO from "./DAO.js";

const CACHORRO_TABELA = "Cachorro"

class CachorroDAO extends DAO {
  /**
   * @param {CachorroModel} data 
   */
  static async inserirCachorro(data) {
    const dataValues = Object.values(data)
    const query = `
        INSERT INTO Cachorro (nome, raca, cor, sexo, peso) VALUES (?, ?, ?, ?, ?))
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
   * Método de busca de registros específicos na tabela Usuários através de um identificador
   * @param {string} id 
   * @returns {CachorroModel}
   */
  static async buscarCachorroPorId(id) {
      const query = `
      SELECT * FROM ${CACHORRO_TABELA} where ID = ?;
      `;
      return await this.buscarPorId(query, id);
  }

  /**
   * Método de deleção de registros específicos na tabela Adestrador através de um identificador
   * @param {string} id 
   */
  static async deletarCachorroPorId(id) {
      const query = `DELETE FROM ${CACHORRO_TABELA} WHERE ID = ?;`;
      await this.deletarPorId(query, id);
  }

  /**
   * Atualiza um registro específico da tabela Adestrador através de um identificador
   * @param {string} id 
   * @param {any} data 
   */
  static async AtualizarCachorroPorId(id, data) {
      const query = `UPDATE ${CACHORRO_TABELA} SET NOME=?, RACA=?, COR=?, SEXO=?,  PESO=? WHERE ID=?;`;
      await this.atualizarPorId(query, [...Object.values(data), id]);
  }
}

export default CachorroDAO;
