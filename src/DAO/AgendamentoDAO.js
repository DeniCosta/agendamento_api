import AgendamentoModel from "../AgendamentoDAO.js";
import DAO from "./DAO.js";

const Agendamento_TABELA = "Agendamento"

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
    static async buscarTodosOs(){
        return await this.buscar(Agendamento_TABELA)
    }

    /**
     * Método de busca de registros específicos na tabela Agendamento através de um identificador
     * @param {string} id 
     * @returns {AgendamentoModel}
     */
    static buscarAgendamentoPorId(id){
        return this.buscarPorId(Agendamento_TABELA, id)
    }

    /**
     * Método de deleção de registros específicos na tabela Agendamento através de um identificador
     * @param {string} id 
     */
    static deletarAgendamentoPorId(id){
        this.deletarPorId(Agendamento_TABELA, id)
    }

    /**
     * Atualiza um registro específico da tabela Agendamento através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static AtualizarAgendamentoPorId(id, data){
        this.atualizarPorId(Agendamento_TABELA, id, data)
    }
}

export default AgendamentoDAO;
