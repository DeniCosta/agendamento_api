import ClienteModel from "../models/ClienteModel.js";
import DAO from "./DAO.js";

const CLIENTE_TABELA = "clientes";

class ClienteDAO extends DAO {
    /**
     * Método de inserção de dados da tabela Clientes
     * @param {ClienteModel} data 
     */
    static async inserirCliente(data) {
        const dataValues = Object.values(data);
        const query = `
        INSERT INTO ${CLIENTE_TABELA} (nome, email, telefone, id_endereco) VALUES (?,?,?,?);
        `;
        const result = await this.inserir(query, dataValues);
        return result;
    }

    /**
     * Método que retorna todos os registros da tabela Clientes
     * @returns {Array<ClienteModel>}
     */
    static async buscarTodosOsClientes() {
        const query = `
        SELECT * FROM ${CLIENTE_TABELA};
        `;
        return await this.buscar(query);
    }

    /**
     * Método de busca de registros específicos na tabela Clientes através de um identificador
     * @param {integer} id 
     * @returns {ClienteModel}
     */
    static async buscarClientePorId(id) {
        const query = `
        SELECT * FROM ${CLIENTE_TABELA} where id = ?;
        `;
        return await this.buscarPorId(query, id);
    }

    /**
     * Método de deleção de registros específicos na tabela Clientes através de um identificador
     * @param {integer} id 
     */
    static async deletarClientePorId(id) {
        const query = `DELETE FROM ${CLIENTE_TABELA} WHERE id = ?;`;
        await this.deletarPorId(query, id);
    }

 /**
 * Atualiza um registro específico da tabela Clientes através de um identificador
 * @param {integer} id 
 * @param {any} data 
 */
static async AtualizarClientePorId(id, data) {
    const query = `UPDATE ${CLIENTE_TABELA} SET nome=?, email=?, telefone=?, id_endereco=? WHERE id=?;`;
    await this.atualizarPorId(query, [...Object.values(data), id]);
}
}

export default ClienteDAO;
