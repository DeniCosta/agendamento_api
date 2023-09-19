// Admin
class AdestradorModel {

    /**
     * 
     * @param {string} nome
     * @param {string} formacao 
     * @param {number} id_agendamento 
     * @param {number} id_endereco 
*/
        constructor(nome,formacao,id_agendamento,id_endereco){
            this.nome=nome
            this.formacao= formacao
            this.id_agendamento=id_agendamento
            this.id_endereco=id_endereco
        }
    }
    
    export default AdestradorModel