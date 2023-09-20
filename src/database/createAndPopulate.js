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
 * Script sql de criação da tabela Adestrador 
 */
const ADESTRADOR_TABLE = `
CREATE TABLE IF NOT EXISTS "Adestrador" (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64) ,
    "FORMACAO" varchar(64),
    "ID_AGENDAMENTO"INTEGER, 
    "ID_Endereco"INTEGER , 
);
`

/**
 * script de inserção de dados base
 */
const ADD_ADESTRADOR_DATA = `
INSERT INTO Adestrador (nome,formacao,id_agendamento,id_endereco)
VALUES 
    ('DA Cruz','Auxiliar de veterinário',1,1),
    (',

`

/**
 * Function que aplica a criação da tabela Adestrador via SQLite
 */
function criaTabelaAdestrador() {
    Database.run(ADESTRADOR_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de adestrador")
        } else {
            console.log("Tabela Adestrador criada!")
        }
    });
}

/**
 * Function que polula via SQLite a tabela ADESTRADOR
 */
function populaTabelaAdestrador() {
    Database.run(ADD_ADESTRADOR_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de adestrador")
        }
        else {
            console.log("Tabela Adestrador populada!")
        }
    });
}

/**
 * Script sql de criação da tabela Adestrador 
 */
const ENDERECO_TABLE = `
CREATE TABLE IF NOT EXISTS "Endereco" (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    "CEP" varchar(64) ,
    "NUMERO" varchar(64),
    "COMPLEMENTO" varchar(64)
);
`

/**
 * script de inserção de dados base
 */
const ADD_ENDERECO_DATA = `
INSERT INTO Endereco (CEP, numero, complemento)
VALUES 
    ('83232331','19410','Casa 3'),
    (',

`

/**
 * Function que aplica a criação da tabela Adestrador via SQLite
 */
function criaTabelaEndereco() {
    Database.run(ENDERECO_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de endereço")
        } else {
            console.log("Tabela Endereço criada!")
        }
    });
}

/**
 * Function que polula via SQLite a tabela ADESTRADOR
 */
function populaTabelaEndereco() {
    Database.run(ADD_ENDERECO_DATA, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de endereço")
        }
        else {
            console.log("Tabela Endereço criada!")
        }
    });
}
/**
 * Roda as funções de criação de tabela e população em série (uma após a outra)
 */
Database.serialize(()=>{
    criaTabelaClientes();
    populaTabelaClientes();
    
    criaTabelaAdestrador();
    populaTabelaAdestrador();
    
    criaTabelaEndereco();
    populaTabelaEndereco();
});







