import ValidacaoServices from "./ValidacaoServices.js";

class AgendamentoValidacao extends ValidacaoServices {

    /**
     * Método para validação de formação para a entidade agendamento
     * @param {string} duracao 
     * @returns {boolean}
     */
    static validaDuracao(duracao) {
        // Usando uma expressão regular para validar o formato da hora
        const duracaoRegex = /^[0-9]+[0-9]:[0-9]+[0-9]$/;

        // Verificando se a duração passada é uma string e corresponde ao formato de duração válido
        return typeof duracao === "string" && duracaoRegex.test(duracao);
    }

    static validaDia(dia) {
        // Usando uma expressão regular para validar o formato de data (dia e mês)
        const duracaoRegex = /^[0-3]+[0-9]-[0-1]+[0-9]$/;

        // Verificando se o dia passado é uma string e corresponde ao formato de dia válido
        return typeof dia === "string" && duracaoRegex.test(dia);
    }

    static validaHora(hora) {
        // Usando uma expressão regular para validar o formato de hora (hora : minuto)
        const duracaoRegex = /^[0-2]+[0-9]:[0-5]+[0-9]$/;

        // Verificando se a hora passada é uma string e corresponde ao formato de hora válida
        return typeof hora === "string" && duracaoRegex.test(hora);
    }
    /**
         * Método para validação de todos os campos fornecidos pelo cliente na entidade agendamento
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