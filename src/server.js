import authRoutes from './routes/authRoutes.js';
import 'dotenv/config';
import express from 'express'
import app from './app.js'; // Importação com .js
import piadasRoutes from './routes/piadaRoutes.js';

// Importa a função de configuração do banco
import { setupDatabase } from './config/database.js';

app.use(express.json());

// Inicializa o banco de dados antes de tudo
setupDatabase();

const PORT = 3000;

app.get('/', (req, res) => {

  res.send('Olá! Minha primeira API de Piadas está viva!');
});

app.use('/api', authRoutes);

app.use('/api', piadasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor online na porta http://localhost:${PORT}/`);
});
