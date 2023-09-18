class EnderecoModel {

    /**
    * Construtor do objeto modelo para usuários
    * @param {string} CEP 
    * @param {string} numero 
    * @param {string} complemento 
    */

    /* Ver utilidade desses parametros depois */

   constructor(cep, numero, complemento){
       this.cep = cep
       this.numero = numero
       this.complemento = complemento
   }
}

export default EnderecoModel