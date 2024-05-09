# TESTE PRÁTICO DA QUIKDEV - DESENVOLVEDOR SÊNIOR

Este teste busca identificar diferentes níveis de habilidade, medindo conhecimento, organização e esforço.
Com foco em **NodeJs**, **React**, **MySql** e **Linux**.
Usando as tecnologias e metodologias atuais para desenvolvimento rápido.

## Infraestrutura

De acordo com o foco, o sistema foi montado em cima da distribuição **DEBIAN 10**.
Seguindo com as principais especificações:
- **Node** na versão: 18.20.2
- **NPM** na versão: 10.5.0
- **Maria DB** na versão: 10

Além dos softwares de apoio como **PostMan**, **VsCode**, **Git**, **Dbeaver**, etc.

## Inicialização
A inicialização consiste em executar alguns passos.
1. Clone do repositório.
2. Configuração das variáveis de ambiente.
3. Inserção de uma carga no banco de dados para iniciar os testes.
4. Rodar aplicação backend (API).
5. Rodar aplicação FrontEnd.

>Especificação das etapas.

1. Para testar é necessário clonar esse projeto para a máquina local (de preferencia com as especificações descritas na infraestrutura).
	- Após é possível acessar a pasta documentos, para ter mais informações do projeto.
2. Configurar as variáveis de ambiente.
	- Entre no arquivo **api/db.js**.
	```
	export const db = mysql.createConnection({
		host: "127.0.0.1",
		user: "root",
		password: "",
		database: "quikdev"
	})
	```
	- Troque as credenciais para as credenciais locais.
3. Inserir uma carga no banco de dados.
    - Criação e Carga do banco de dados
    - (_documentacao/banco_de_dados.sql)
4. Rodar a aplicação backend (api).
	- Dentro da pasta api, executar o comando:
	```
	$ npm install
	$ npm start
	```
	- Dentro da pasta frontend, executar o comando:
	```
	$ npm install
	$ npm start
	```

## Acessando a API

Dentro da pasta de documentação foi exportado um conjunto de endpoints.
Basta entrar no software PostMan e realizar a importação.

As principais entidades do sistema são:
- Usuários
- Posts
- Comentários
- Tokens

A API é acessada pelo endereço:
    ```
	http://localhost:8800/
	```


O frontend é acessado pelo endereço:
    ```
	http://localhost:3000/
	```