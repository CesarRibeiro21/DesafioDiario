import * as db  from '../repository/diairoRepository';

import { Router } from 'express'
const endpoints = Router();

endpoints.get('/diario/', async (req, resp) => {
    try{
        let registro= await db.consultarDiario();
        resp.send(registros);
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

