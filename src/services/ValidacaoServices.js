import DAO from "../DAO/DAO.js"; // Importa o DAO 

class ValidacaoServices {
    /**
     * Método que valida a existência do id no banco de dados
     * @param {integer} id 
     * @returns {boolean}
     */
    static validarExistencia(id) {
        const registroUnico = DAO.buscarPorId(id);
        return registroUnico !== null;
    }

    /**
     * Método de validação de nome
     * @param {string} nome 
     * @returns {boolean}
     */
    static validaNome(nome) {
        return typeof nome === "string" && nome.length > 2;
    }
}

export default ValidacaoServices;
