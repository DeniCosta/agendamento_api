import EnderecoModel from "../models/EnderecoModel.js";
import DAO from "./DAO.js";


class EnderecoDAO extends DAO{
    /**
     * Método de inserção de dados da tabela Endereço
     * @param {EnderecoModel} data 
     */
    static async inserirEndereco(data){
        const dataValues = Object.values(data)
        const query = `
        INSERT INTO ENDERECO (CEP, NUMERO, COMPLEMENTO) VALUES (?,?,?)
        `
        const result = await this.inserir(query, dataValues)
        return result
    }

    /**
     * Método que retorna todos os registros da tabela Endereço
     * @returns {Array<UsuariosModel>}
     */
    static async buscarTodosOsEnderecos(){
        const query = `
        SELECT * FROM ENDERECO;
        `
        return await this.buscar(query)
    }

    /**
     * Método de busca de registros específicos na tabela Endereço através de um identificador
     * @param {string} id 
     * @returns {UsuariosModel}
     */
    static async buscarEnderecoPorId(id){
        const query = `
        SELECT * FROM ENDERECO where ID = ?;
        `
            try {
                const response = await this.buscarPorId(query, id)
                return response
            } catch (error) {
                throw error
            }

    }

    /**
     * Método de deleção de registros específicos na tabela Usuários através de um identificador
     * @param {string} id 
     */
    static async deletarEnderecoPorId(id){
        const query = "DELETE FROM ENDERECO WHERE ID = ?"
        try {
            await this.deletarPorId(query, id)
        } catch (error) {
            throw error
        }

    }

    /**
     * Atualiza um registro específico da tabela Usuários através de um identificador
     * @param {string} id 
     * @param {any} data 
     */
    static async AtualizarEnderecoPorId(id, data){
        const query = "UPDATE ENDERECO SET (CEP, NUMERO, COMPLEMENTO) = (?,?,?) WHERE ID = ?"
        const values = Object.values(data)
        try {            
            await this.atualizarPorId(query, id, [id ,...values])
        } catch (error) {
            throw error
        }
    }
}

export default EnderecoDAO;
