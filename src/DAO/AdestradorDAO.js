import AdestradorModel from "../models/AdestradorModel.js";
import DAO from "./DAO.js";

const ADESTRADOR_TABELA = "Adestrador"

class AdestradorDAO extends DAO{
    /**
     * @param {AdestradorModel} data 
     */
    static async inserirAdestrador(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO Adestrador (nome,formacao,id_agendamento,id_endereco) VALUES (?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * @returns {Array<AdestradorModel>}
     */
    static async buscarTodosEmAdestrador(){
        const query = `
        SELECT * FROM ${ADESTRADOR_TABELA};
        `;
        return await this.buscar(query);
    }

    /**
     * Método de busca de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     * @returns {AdestradorModel}
     */
    static async buscarAdestradorPorId(id) {
        const query = `
        SELECT * FROM ${ADESTRADOR_TABELA} where ID = ?;
        `;
        return await this.buscarPorId(query, id);
    }

    /**
     * Método de deleção de registros específicos na tabela Adestrador através de um identificador
     * @param {string} id 
     */
    static async deletarAdestradorPorId(id) {
        const query = `DELETE FROM ${ADESTRADOR_TABELA} WHERE ID = ?;`;
        await this.deletarPorId(query, id);
    }

    /**
     * Atualiza um registro específico da tabela Adestrador através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async AtualizarAdestradorPorId(id, data) {
        const query = `UPDATE ${ADESTRADOR_TABELA} SET NOME=?, FORMACAO=?, TELEFONE=?, ID_AGENDAMENTO=?,  ID_ENDERECO=? WHERE ID=?;`;
        await this.atualizarPorId(query, [...Object.values(data), id]);
    }
}

export default AdestradorDAO;
