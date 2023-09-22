import Database from "./Database.js";
/**
 * Script SQL de criação da tabela CLIENTES
 */
const CLIENTES_TABLE = `
CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    email TEXT,
    telefone TEXT,
    id_endereco INTEGER
);
`

/**
 * Script de inserção de dados base para CLIENTES
 */
const ADD_CLIENTES_DATA = `
INSERT INTO clientes (nome, email, telefone, id_endereco)
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
CREATE TABLE IF NOT EXISTS adestrador (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    formacao TEXT,
    id_agendamento INTEGER, 
    id_endereco INTEGER 
);
`

/**
 * script de inserção de dados adestrador
 */
const ADD_ADESTRADOR_DATA = `
INSERT INTO adestrador (nome,formacao,id_agendamento,id_endereco)
VALUES 
    ('DA Cruz','Auxiliar de veterinário',1,1)

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
 * Function que polula via SQLite a tabela adestrador
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
 * Script sql de criação da tabela endereço 
 */
const ENDERECO_TABLE = `
CREATE TABLE IF NOT EXISTS "endereco" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    "cep" varchar(64) ,
    "numero" varchar(64),
    "complemento" varchar(64)
);
`

/**
 * script de inserção de dados endereço
 */
const ADD_ENDERECO_DATA = `
INSERT INTO endereco (cep, numero, complemento)
VALUES 
    ('83232331','19410','Casa 3')

`

/**
 * Function que aplica a criação da tabela Endereço via SQLite
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
 * Function que polula via SQLite a tabela endereço
 */
function populaTabelaEndereco() {
    Database.run(ADD_ENDERECO_DATA, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de endereço")
        }
        else {
            console.log("Tabela Endereço populada!")
        }
    });
}

/**
 * Script sql de criação da tabela Cachorro
 */
const CACHORRO_TABLE = `
CREATE TABLE IF NOT EXISTS cachorro (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    raca TEXT,
    cor TEXT,
    sexo TEXT,
    peso TEXT
);
`

/**
 * script de inserção de dados cachorro
 */
const ADD_CACHORRO_DATA = `
INSERT INTO cachorro (nome, raca, cor, sexo, peso)
VALUES 
    ('toto','salsicha','preto', 'macho', '11kg')

`

/**
 * Function que aplica a criação da tabela Adestrador via SQLite
 */
function criaTabelaCachorro() {
    Database.run(CACHORRO_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de cachorro")
        } else {
            console.log("Tabela Cachorro criada!")
        }
    });
}

/**
 * Function que polula via SQLite a tabela ADESTRADOR
 */
function populaTabelaCachorro() {
    Database.run(ADD_CACHORRO_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela cachorro")
        }
        else {
            console.log("Tabela Cachorro populada!")
        }
    });
}

/**
 * Script sql de criação da tabela Agendamento 
 */
const AGENDAMENTO_TABLE = `
CREATE TABLE IF NOT EXISTS "agendamento" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    "duracao" varchar(64),
    "dia" varchar(64),
    "hora" varchar(64),
    "id_cachorro" INTEGER, 
    "id_adestrador" INTEGER 
);
`

/**
 * script de inserção de dados Agendamento
 */
const ADD_AGENDAMENTO_DATA = `
INSERT INTO agendamento (duracao, dia, hora, id_cachorro, id_adestrador)
VALUES 
    ('1h 30min','25.09', '15:00', 1, 1)

`

/**
 * Function que aplica a criação da tabela Agendamento via SQLite
 */
function criaTabelaAgendamento() {
    Database.run(AGENDAMENTO_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de agendamento")
        } else {
            console.log("Tabela Agendamento criada!")
        }
    });
}

/**
 * Function que polula via SQLite a tabela Agendamento
 */
function populaTabelaAgendamento() {
    Database.run(ADD_AGENDAMENTO_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de agendamento")
        }
        else {
            console.log("Tabela Agendamento populada!")
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

    criaTabelaAgendamento();
    populaTabelaAgendamento();

    criaTabelaCachorro();
    populaTabelaCachorro();
});







