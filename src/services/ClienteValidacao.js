import ValidacaoServices from "./ValidacaoServices.js";

class ClienteValidacao extends ValidacaoServices {

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
         * Método para validação de todos os campos fornecidos pelo cliente na entidade cliente
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

export default ClienteValidacao;

