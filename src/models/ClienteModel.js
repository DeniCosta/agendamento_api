/**
 * Objeto modelo para cliente
 */
class ClienteModel{
    /**
     * Construtor do objeto modelo para cliente
     * @param {text} nome 
     * @param {text} email 
     * @param {integer} telefone 
     * @param {integer} id_endereco
     */
    constructor(nome, email, telefone, id_endereco){
        this.nome = nome
        this.email = email
        this.telefone = telefone
        this.id_endereco = id_endereco
    }
}

export default ClienteModel;
