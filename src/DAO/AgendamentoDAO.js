import AgendamentoModel from "../models/AgendamentoModel.js";
import DAO from "./DAO.js";

const AGENDAMENTO_TABELA = "Agendamento"

class AgendamentoDAO extends DAO{
    /**
     * @param {AgendamentoModel} data 
     */
    static async inserirAgendamento(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO Agendamento (duracao, dia, hora, id_cachorro, id_adestrador) VALUES (?,?,?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    
    /**
     * @returns {Array<AgendamentoModel>}
     */
    static async buscarTodosEmAgendamento(){
        const query = `
        SELECT * FROM ${AGENDAMENTO_TABELA};
        `;
        return await this.buscar(query);
    }

    /**
     * Método de busca de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     * @returns {AgendamentoModel}
     */
    static async buscarAgendamentoPorId(id) {
        const query = `
        SELECT * FROM ${AGENDAMENTO_TABELA} where ID = ?;
        `;
        return await this.buscarPorId(query, id);
    }

    /**
     * Método de deleção de registros específicos na tabela Adestrador através de um identificador
     * @param {string} id 
     */
    static async deletarAgendamentoPorId(id) {
        const query = `DELETE FROM ${AGENDAMENTO_TABELA} WHERE ID = ?;`;
        await this.deletarPorId(query, id);
    }

    /**
     * Atualiza um registro específico da tabela Adestrador através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async AtualizarAgendamentoPorId(id, data) {
        const query = `UPDATE ${AGENDAMENTO_TABELA} SET DURACAO=?, DIA=?, HORA=?, ID_CACHORRO=?,  ID_ADESTRADOR=? WHERE ID=?;`;
        await this.atualizarPorId(query, [...Object.values(data), id]);
    }
}

export default AgendamentoDAO;
