import AdestradorModel from "../AdestradorDAO.js";
import DAO from "./DAO.js";

const Adestrador_TABELA = "Adestrador"

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
    static async buscarTodosOs(){
        return await this.buscar(Adestrador_TABELA)
    }

    /**
     * Método de busca de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     * @returns {AdestradorModel}
     */
    static buscarAdestradorPorId(id){
        return this.buscarPorId(Adestrador_TABELA, id)
    }

    /**
     * Método de deleção de registros específicos na tabela Adestrador através de um identificador
     * @param {string} id 
     */
    static deletarAdestradorPorId(id){
        this.deletarPorId(Adestrador_TABELA, id)
    }

    /**
     * Atualiza um registro específico da tabela Adestrador através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static AtualizarAdestradorPorId(id, data){
        this.atualizarPorId(Adestrador_TABELA, id, data)
    }
}

export default AdestradorDAO;
