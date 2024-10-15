import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import adicionarRotas from '../src/rotas.js'


const servidor = express();
servidor.use(cors());
servidor.use(express.json());

adicionarRotas(servidor);

servidor.listen(process.env.PORT, () => console.log(`--> API subiu na porta ${process.env.PORT}`));