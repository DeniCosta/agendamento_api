import Database from "./Database.js";
/**
 * Script SQL de criação da tabela CLIENTES
 */
const CLIENTES_TABLE = `
CREATE TABLE IF NOT EXISTS CLIENTES (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME TEXT,
    EMAIL TEXT,
    TELEFONE TEXT,
    ID_ENDERECO INTEGER
);
`

/**
 * Script de inserção de dados base para CLIENTES
 */
const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (NOME, EMAIL, TELEFONE, ID_ENDERECO)
VALUES 
    ('Julia Costa', 'julia.costa@gmail.com.br', '41999999999', 1),
    ('Maria de Jesus', 'maje@gmail.com', '41888888888', 2),
    ('Camila Santos', 'cami_santos@gmail.com', '41999998888', 3)`

/**
 * Função que aplica a criação da tabela CLIENTES
 */
function criaTabelaClientes() {
    Database.run(CLIENTES_TABLE, (error)=> {
       if (error) {
            console.log("Erro ao criar tabela de Clientes")
        } else {
            console.log("Tabela Clientes criada com sucesso!")
        }
    });
}

/**
 * Função que popula a tabela CLIENTES
 */
function populaTabelaClientes() {
    Database.run(ADD_CLIENTES_DATA, (error)=> {
       if (error) {
        console.log("Erro ao popular tabela de Clientes")
        }
        else {
            console.log("Tabela Clientes populada com sucesso!")
        }
    });
}

/**
 * Roda as funções de criação de tabela e população em série (uma após a outra)
 */
Database.serialize(()=>{
    criaTabelaClientes();
    populaTabelaClientes();
});
