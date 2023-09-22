import EnderecoModel from "../models/EnderecoModel.js";
import DAO from "./DAO.js";

const ENDERECO_TABELA = "endereco";

class EnderecoDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Endereço
     * @param {EnderecoModel} data 
     */
    static async inserirEndereco(data) {
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ${ENDERECO_TABELA} (cep, numero, complemento) VALUES (?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * @returns {Array<EnderecoModel>}
     */
    static async buscarTodosOsEnderecos() {
        const query = `
        SELECT * FROM ${ENDERECO_TABELA};
        `;
        return await this.buscar(query);
    }

    /**
     * Método de busca de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     * @returns {EnderecoModel}
     */
    static async buscarEnderecoPorId(id) {
        const query = `
        SELECT * FROM ${ENDERECO_TABELA} where ID = ?;
        `;
        return await this.buscarPorId(query, id);
    }

    /**
     * Método de deleção de registros específicos na tabela Adestrador através de um identificador
     * @param {string} id 
     */
    static async deletarEnderecoPorId(id) {
        const query = `DELETE FROM ${ENDERECO_TABELA} WHERE ID = ?;`;
        await this.deletarPorId(query, id);
    }

    /**
     * Atualiza um registro específico da tabela Adestrador através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async AtualizarEnderecoPorId(id, data) {
        const query = `UPDATE ${ENDERECO_TABELA} SET CEP=?, NUMERO=?, COMPLEMENTO=? WHERE ID=?;`;
        await this.atualizarPorId(query, [...Object.values(data), id]);
    }
}

export default EnderecoDAO;
