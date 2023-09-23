// Admin
class AgendamentoModel {

    /**
     * 
     * @param {string} duracao
     * @param {string} dia 
     * @param {string} hora
     * @param {number} id_cachorro
     * @param {number} id_adestrador
*/
        constructor(duracao, dia, hora, id_cachorro, id_adestrador){
            this.duracao=duracao
            this.dia=dia
            this.hora=hora
            this.id_cachorro=id_cachorro
            this.id_adestrador=id_adestrador
        }
    }
    
    export default AgendamentoModel