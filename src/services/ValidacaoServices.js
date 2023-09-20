import ClientesDAO from "../DAO/ClienteDAO.js"; // Importe o DAO para Clientes

class ValidacaoServices {
    /**
     * Método que valida a existência do cliente na base de dados
     * @param {integer} id 
     * @returns {boolean}
     */
    static validarExistencia(id) {
        const cliente = ClientesDAO.buscarClientePorId(id);
        return cliente !== null;
    }

    /**
     * Método de validação de nome para a entidade Cliente
     * @param {string} nome 
     * @returns {boolean}
     */
    static validaNome(nome) {
        return typeof nome === "string" && nome.length > 2;
    }

    /**
 * Método para validação de email para a entidade Cliente
 * @param {string} email 
 * @returns {boolean}
 */
    static validaEmail(email) {
        // Usando uma expressão regular para validar o formato do email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Verificando se o email passado é uma string e corresponde ao formato de email válido
        return typeof email === "string" && emailRegex.test(email);
    }
    /**
     * Método para validação de telefone para a entidade Cliente
     * @param {string} telefone 
     * @returns {boolean}
     */
    static validaTelefone(telefone) {
        return typeof telefone === "string" && telefone.length >= 9;
    }

    /**
         * Método para validação de todos os campos fornecidos pelo cliente na entidade usuário
         * @param {string} nome 
         * @param {string} email 
         * @param {string} telefone 
         * 
         */

    static validaCamposCliente(nome, email, telefone) {
        const isValid = this.validaNome(nome) && this.validaEmail(email) && this.validaTelefone(telefone)
        if (!isValid) {
            throw new Error("Campos invalidos")
        }
    }

}

export default ValidacaoServices;
