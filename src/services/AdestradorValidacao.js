import ValidacaoServices from "./ValidacaoServices.js";

class AdestradorValidacao extends ValidacaoServices {

    /**
     * Método para validação de formação para a entidade adestrador
     * @param {string} formacao 
     * @returns {boolean}
     */
    static validaFormacao(formacao) {
        return typeof formacao === "string";
    }

    /**
         * Método para validação de todos os campos fornecidos pelo cliente na entidade adetsrador
         * @param {string} nome 
         * @param {string} formacao 
         * 
         */

    static validaCamposAdestrador(nome, formacao) {
        const isValid = this.validaNome(nome) && this.validaFormacao(formacao)
        if (!isValid) {
            throw new Error("Campos invalidos")
        }
    }

}

export default AdestradorValidacao;