// Arquivo principal da aplicação

// Importar bibliotecas necessárias
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Criar uma instância do servidor Express
const app = express();

// Configurar o servidor Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar a conexão com o banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'senha',
  database: 'biblioteca'
});

// Rota para realizar busca de livros por título, autor ou categoria
app.get('/livros', (req, res) => {
  const { termoBusca } = req.query;
  const query = `
    SELECT * FROM livros
    WHERE titulo LIKE '%${termoBusca}%' 
    OR autor LIKE '%${termoBusca}%' 
    OR categoria LIKE '%${termoBusca}%'
  `;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Rota para cadastrar um novo livro
app.post('/livros', (req, res) => {
  const { titulo, autor, categoria } = req.body;
  const query = `
    INSERT INTO livros (titulo, autor, categoria)
    VALUES ('${titulo}', '${autor}', '${categoria}')
  `;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send('Livro cadastrado com sucesso!');
  });
});

// Rota para cadastrar um novo autor
app.post('/autores', (req, res) => {
  const { nome } = req.body;
  const query = `
    INSERT INTO autores (nome)
    VALUES ('${nome}')
  `;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send('Autor cadastrado com sucesso!');
  });
});

// Rota para cadastrar um novo usuário
app.post('/usuarios', (req, res) => {
  const { nome, email } = req.body;
  const query = `
    INSERT INTO usuarios (nome, email)
    VALUES ('${nome}', '${email}')
  `;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send('Usuário cadastrado com sucesso!');
  });
});

// Rota para realizar empréstimo de livro
app.post('/emprestimo', (req, res) => {
  const { livroId, usuarioId } = req.body;
  const query = `INSERT INTO emprestimos (livro_id, usuario_id) VALUES (${livroId}, ${usuarioId})`;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send('Empréstimo realizado com sucesso!');
  });
});

// Rota para realizar reserva de livro
app.post('/reserva', (req, res) => {
  const { livroId, usuarioId } = req.body;
  const query = `INSERT INTO reservas (livro_id, usuario_id) VALUES (${livroId}, ${usuarioId})`;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send('Reserva realizada com sucesso!');
  });
});

// Rota para gerar relatório de empréstimos
app.get('/relatorio-emprestimos', (req, res) => {
  const query = 'SELECT * FROM emprestimos';
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Rota para gerar relatório de reservas
app.get('/relatorio-reservas', (req, res) => {
  const query = 'SELECT * FROM reservas';
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Rota para gerar relatório de acervo
app.get('/relatorio-acervo', (req, res) => {
  const query = 'SELECT * FROM livros';
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    res.json(results);
  });
});

// Integrar o sistema com bibliotecas físicas da universidade

// Configurar a porta do servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
