class ClienteModel {

    /**
    * Construtor do objeto modelo para usuários
    * @param {string} email 
    * @param {string} senha 
    * @param {string} nome 
    * @param {string} telefone 
    * @param {string} endereco 
    */

    /* Ver utilidade desses parametros depois */

   constructor(email, senha, nome, telefone, endereco){
       this.email = email
       this.senha = senha
       this.nome = nome
       this.telefone = telefone
       this.endereco = endereco /* Essa é pra ser uma chave estrangeira (FK) */
   }
}

export default ClienteModel