class CachorroModel {

  /**
   * 
   * @param {number} id 
   * @param {string} nome 
   * @param {string} raca 
   * @param {string} cor 
   * @param {string} sexo 
   * @param {string} porte 
   * @param {string} peso 
   * @param {string} temperamento 
   * @param {boolean} statusVacina 
   * @param {string} proprietario fk
   */

  constructor(id, nome, raca, cor, sexo, porte, peso, temperamento, statusVacina) {
    this.id = id
    this.nome = nome
    this.raca = raca
    this.cor = cor
    this.sexo = sexo
    this.porte = porte
    this.peso = peso
    this.temperamento = temperamento
    this.statusVacina = statusVacina
  }
}

export default CachorroModel