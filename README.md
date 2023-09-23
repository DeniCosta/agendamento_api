
# Ferramenta Adestramento API

Este projeto tem como finalidade desenvolver uma API
REST com NodeJs, que vai cuidar de todas as entidades de uma empresa, utilizando o framework express.
Em nosso caso, estamos atendendo o Pedro, que é um adesrtrador autonomo, que atua na area já a 3 anos, porém sua maior dificuldade é com a organização dos agendamentos; por isso Pedro decidiu nos contratar para desenvolver uma técnologia que o ajudasse nesse quesito.
Decidimos então criar uma API onde Pedro pudesse criar uma "agenda" para inserir/ editar/ excluir seus clientes e respectivos doguinhos, registrandoos no banco de dados.

## Funcionalidades

- Adiciona adestradores no banco de dados;
- Cria e salva as informações do clientes e respectivos pets no banco de dados;
- Salva os endereços dos clientes no banco de dados;
- Pode editar e excluir clientes do banco de dados;
- Registra o agendamento e deixa salvo no banco de dados;
- Trata possiveis erros de validações.
## Instalação

**INSTALAÇÃO DE FERRAMENTAS --->**

O primeiro passo é instalar algumas ferramentas para conseguir usar o projeto, caso já tenha alguma dessas ferramentas apenas pule para a próxima etapa.

Para a utilização do projeto é necessário que o usuário possua o Node.js instalado, caso ainda não tenha poderá fazer o download acessando este [link](https://nodejs.org/en).

Após baixar o node você deverá escolher uma IDE de sua preferencia, recomenda-se a utilização do VS Code, você pode baixa-lo clicando [aqui](https://code.visualstudio.com/download).

Caso queira testar as rotas será necessário instalar o Insomnia REST, que é uma software open sourse voltado justamente para testar APIs, o link para download está disponivel [aqui](https://insomnia.rest/download).

**DEPENDENCIAS DO PROJETO --->**

```bash
"cors": "^2.8.5",
"express": "^4.18.2",
"jest": "^29.7.0",
"sqlite3": "^5.1.6" 
``` 

**INSTALAÇÃO DO PROJETO --->**

Após isso você deverá fazer o clone do projeto copiando este link abaixo e abrindo um terminal de sua preferencia no diretória que preferir

```bash
git clone https://github.com/DeniCosta/agendamento_api
``` 

Após isso você irá precisar abrir o projeto na sua IDE de preferencia, veja que a pasta tem que ser aberta diretamente não tendo caminhos acima ou abaixo do diretório, isso é fundamental para os comandos rodarem certo.

Feito isso você irá precisar instalar as dependencias com npm, que é um gerenciador de pacotes, utilizando o código a baixo:

```bash
npm install
```

Agora com todas as dependencias instaladas, no mesmo terminal você irá levantar o servidor, copie e cole o seguionte comando no terminal:

```bash
npm run build
```

Agora você já pode consumir as rotas do projeto.
## Scripts

- `npm start` - Roda o servidor;
- `npm run dev` - Roda a aplicação em modo de desenvolvedor;
- `npm run test` - Roda os testes do Jest;
- `npm run database` - Roda arquivo para inserir dados mockados para usuário;
- `npm run build` - Roda os scripts start e datrabase ao mesmo tempo.

## Rotas

Aqui vai uma pequena demonstração de algumas das rotas disponiveis:
## Stack utilizada

**Back-end:** JavaScript, Node, npm, SQLite3, Insomnia, cors, express, jest; 

**Documentação:** Lucid, Trello, Discord.


## Aprendizados

Desenvolvimento do zero de uma API Rest, manipulação do runtime Node (que funciona como um interpretador de JavaScript fora do ambiente do navegador), utilização de gerenciadores de pacotes no node e das seguintes dependencias: cors, express, jest, sqlite3, nodemon, assim como a manipulação de banco de dados no back-end.

Otras ferramentas utilizadas para documentação e gestão do projeto foram o Lucid para a criação do diagrama das entidades do banco de dados, Trello para a organização total do projeto e utilização da metodologia agil (Scrum) que foi fundamental para a conclusão desse projeto.
## Documentação

[Link Trello - Documentação do projeto](https://trello.com/invite/b/JVv3JPFo/ATTI042aac78b31b84f1c9b9a3cb459031f9A2F9DAD7/squad-tmnt)


## LinkedIn Autores

- [@Dayane Stefane](https://github.com/Dayane99)
- [@Denise Costa](https://github.com/DeniCosta)
- [@Igor Souza](https://github.com/IgorSPinto)
- [@Thaise Araújo](https://github.com/thayse342)


## Perfil do GitHub 

| [<img src="https://avatars.githubusercontent.com/u/132092648?v=4" width="100" height="100" style="border-radius:50%;">](https://github.com/Dayane99) | [<img src="https://avatars.githubusercontent.com/u/106042686?v=4" width="100" height="100" style="border-radius:50%;">](https://github.com/DeniCosta) |
|:---:|:---:|
| **@Dayane99** | **@DeniCosta** |
| [<img src="https://avatars.githubusercontent.com/u/98854015?v=4" width="100" height="100" style="border-radius:50%;">](hhttps://github.com/IgorSPinto) | [<img src="https://avatars.githubusercontent.com/u/110508195?v=4" width="100" height="100" style="border-radius:50%;">](https://github.com/thayse342) |
| **@IgorSPinto** | **@thayse342** |