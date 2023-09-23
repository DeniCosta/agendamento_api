import ValidacaoServices from "./ValidacaoServices.js";

class AgendamentoValidacao extends ValidacaoServices {

    /**
     * Método para validação de formação para a entidade agendamento
     * @param {string} duracao 
     * @returns {boolean}
     */
    static validaDuracao(duracao) {
        // Usando uma expressão regular para validar o formato do email
        const duracaoRegex = /^[0-9]+[0-9]:[0-9]+[0-9]$/;

        // Verificando se o email passado é uma string e corresponde ao formato de email válido
        return typeof duracao === "string" && duracaoRegex.test(duracao);
    }

    static validaDia(dia) {
        // Usando uma expressão regular para validar o formato do email
        const duracaoRegex = /^[0-3]+[0-9]-[0-1]+[0-9]$/;

        // Verificando se o email passado é uma string e corresponde ao formato de email válido
        return typeof dia === "string" && duracaoRegex.test(dia);
    }

    static validaHora(hora) {
        // Usando uma expressão regular para validar o formato do email
        const duracaoRegex = /^[0-2]+[0-9]:[0-5]+[0-9]$/;

        // Verificando se o email passado é uma string e corresponde ao formato de email válido
        return typeof hora === "string" && duracaoRegex.test(hora);
    }
    /**
         * Método para validação de todos os campos fornecidos pelo cliente na entidade adetsrador
         * @param {string} duracao 
         * @param {string} dia 
         * @param {string} hora 
         */

    static validaCamposAgendamento(duracao, dia, hora) {
        const isValid = this.validaDuracao(duracao) && this.validaDia(dia) && this.validaHora(hora)
        if (!isValid) {
            throw new Error("Campos invalidos")
        }
    }

}

export default AgendamentoValidacao;