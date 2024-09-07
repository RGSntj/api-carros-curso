import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { adicionarRotas } from './routes.js';

const servidor = express();
servidor.use(express.json());
servidor.use(cors())

adicionarRotas(servidor);

servidor.listen(process.env.PORTA || 3001, () => console.log("--> Servidor rodando <--"));