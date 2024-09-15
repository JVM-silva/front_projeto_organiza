const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000; // Ou outra porta se você alterou

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Para servir arquivos estáticos como HTML e JS

const dbFilePath = path.join(__dirname, 'db.json');

// Middleware para ler o banco de dados
function readDatabase() {
    if (!fs.existsSync(dbFilePath)) {
        fs.writeFileSync(dbFilePath, JSON.stringify({ investments: [] }));
    }
    return JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
}

// Middleware para escrever no banco de dados
function writeDatabase(data) {
    fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2));
}

// Armazenamento temporário em memória
let users = [];

// Endpoint para criar um novo usuário
app.post('/users', (req, res) => {
  const { email, password } = req.body;

  console.log('Dados recebidos:', req.body); // Verifique os dados recebidos

  if (!email || !password) {
    return res.status(400).json({ error: 'Email e senha são obrigatórios' });
  }

  const newUser = { email, password };
  users.push(newUser);

  console.log('Usuário adicionado:', newUser); // Verifique se o usuário está sendo adicionado
  res.status(201).json(newUser);
});

// Endpoint para visualizar todos os usuários armazenados
app.get('/users', (req, res) => {
  console.log('Dados armazenados:', users); // Verifica o que está armazenado
  res.json(users);
});

// Endpoint para login (se aplicável)
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Adicione lógica de autenticação aqui
  console.log('Tentativa de login:', req.body);
  res.json({ message: 'Login realizado com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

// ###############################################################################################################
// ###############################################################################################################

app.post('/investments', (req, res) => {
  const { type, value, institution } = req.body;
  if (!type || !value || !institution) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }
  const newInvestment = { type, value, institution };
  investments.push(newInvestment);
  res.status(201).json(newInvestment);
});

app.get('/investments', (req, res) => {
  res.json(investments);
});
