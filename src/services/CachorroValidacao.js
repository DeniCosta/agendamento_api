import ValidacaoServices from "./ValidacaoServices.js";

class CachorroValidacao extends ValidacaoServices {

    /**
     * Método para validação da raça  entidade cachorro
     * @param {string} raca 
     * @returns {boolean}
     */
    static validaRaca(raca) {
        return typeof raca === "string";
    }
    /**
         * Método para validação da cor  entidade cachorro
         * @param {string} cor 
         * @returns {boolean}
         */
    static validaCor(cor) {
        return typeof cor === "string";
    }

    /**
         * Método para validação do sexo  entidade cachorro
         * @param {string} sexo 
         * @returns {boolean}
         */
    static validaSexo(sexo) {
        return typeof sexo === "string";
    }

    /**
           * Método para validação do peso para a entidade cachorro
           * @param {string} peso 
           * @returns {boolean}
           */
    static validaPeso(peso) {
        return typeof peso === "string" && peso.length >= 4;
    }

    /**
         * Método para validação de todos os campos fornecidos pelo cliente na entidade cachorro
         * @param {string} nome 
         * @param {string} raca 
         * @param {string} cor 
         * @param {string} sexo 
         * @param {string} peso
         * 
         * 
         */

    static validaCamposAdestrador(nome, raca, cor, sexo, peso) {
        const isValid = this.validaNome(nome) && this.validaRaca(raca) && this.validaCor(cor) && this.validaSexo(sexo) && this.validaPeso(peso)
        if (!isValid) {
            throw new Error("Campos invalidos")
        }
    }

}

export default CachorroValidacao;