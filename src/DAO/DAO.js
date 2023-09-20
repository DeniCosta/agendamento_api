import Database from "../database/Database.js";

class DAO{
    /**
     * Método de inserção de dados
     * @param {string} query 
     * @param {Array<any>} data 
     */
    static inserir(query, data){
        return new Promise((resolve, reject)=>{
            Database.run(query, data, (error)=>{
                if(error){
                    console.log(error)
                    reject(error)
                }
                resolve({error:false})
            })
        })
    }

    /**
     * Método de busca de dados
     * @param {string} query
     * @returns {any}
     */
    static buscar(query){

        return new Promise((resolve, reject)=>{
            Database.all(query, (error, rows)=>{
                if(error){
                    console.log(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    /**
     * Método de busca de dados específicos através de um identificador
     * @param {string} query 
     * @param {integer} id 
     * @returns {any}
     */
    static buscarPorId(query, id){
        return new Promise((resolve, reject)=>{
            Database.get(query, id, (error, rows)=>{
                if(error){
                    console.log(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    /**
     * Método de deleção de dados específicos através de um identificador
     * @param {string} query 
     * @param {string} id 
     */
    static deletarPorId(query, id){
        return new Promise((resolve, reject)=>{
            Database.all(query, id, (error, rows)=>{
                if(error){
                    console.log(error)
                } else {
                    resolve(rows)
                }
            })
        })
    }

   /**
 * Atualiza um registro específico na base de dados através de um identificador
 * @param {string} query
 * @param {Object} data
 * @param {integer} id
 * @returns {Promise} 
 */
static atualizarPorId(query, data, id) {
    const values = Object.values(data);
    return new Promise((resolve, reject) => {
        Database.run(query, [...values, id], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
}
    
}

export default DAO;