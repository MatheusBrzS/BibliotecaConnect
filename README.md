# LibConnect
Repositório para a atividade "A1 - Aplicando Conhecimento" de Prática Profissional de ADS

# BibliotecaConnect

BibliotecaConnect é uma aplicação para gerenciamento de bibliotecas online. Este projeto visa oferecer uma plataforma moderna e eficiente para acesso e gestão de recursos literários.

## Pré-requisitos

Antes de executar a aplicação, certifique-se de ter os seguintes requisitos instalados em seu sistema:

- Node.js: [Baixe e instale Node.js](https://nodejs.org/)
- MySQL: [Baixe e instale MySQL](https://www.mysql.com/)

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL chamado `biblioteca`.
2. Execute o script SQL fornecido em `database/schema.sql` para criar as tabelas necessárias no banco de dados.

## Instalação

1. Clone este repositório em sua máquina local:
git clone https://github.com/seu-usuario/BibliotecaConnect.git

2. Navegue até o diretório do projeto:
cd BibliotecaConnect

3. Instale as dependências do projeto:
npm install


4. Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz do projeto.
- Adicione as seguintes variáveis de ambiente ao arquivo `.env` e configure conforme necessário:
  ```
  DB_HOST=localhost
  DB_USER=seu-usuario
  DB_PASSWORD=sua-senha
  DB_DATABASE=biblioteca
  ```

## Execução

1. Inicie o servidor Node.js:
npm start


4. Configure as variáveis de ambiente:
- Crie um arquivo `.env` na raiz do projeto.
- Adicione as seguintes variáveis de ambiente ao arquivo `.env` e configure conforme necessário:
  ```
  DB_HOST=localhost
  DB_USER=seu-usuario
  DB_PASSWORD=sua-senha
  DB_DATABASE=biblioteca
  ```

## Execução

1. Inicie o servidor Node.js:
http://localhost:3000


## Uso

- Na aplicação, você poderá:
- Realizar buscas por livros, autores e categorias.
- Cadastrar novos livros, autores e usuários.
- Fazer reservas e empréstimos de livros.
- Gerar relatórios de empréstimos, reservas e acervo.

