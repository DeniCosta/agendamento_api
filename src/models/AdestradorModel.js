// Admin
class AdestradorModel {

    /**
     * 
     * @param {number} id 
     * @param {string} formacao 
     * @param {string} status 
     * @param {string} pessoachavestrangeira 
     */

        constructor(id,formacao,status,pessoachavestrangeira){
            this.id= id
            this.formacao= formacao
            this.status= status
            this.pessoachavestrangeira= pessoachavestrangeira
        }
    }
    
    export default AdestradorModel