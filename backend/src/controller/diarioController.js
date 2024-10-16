    import * as db  from '../repository/diairoRepository.js';

import { Router } from 'express'
const endpoints = Router();

endpoints.get('/diario/', async (req, resp) => {
    try{
        let registro= await db.consultarDiario();
        resp.send(registro);
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/diario/add/', async (req, resp) => {
    try{
        let pessoa = req.body;
        pessoa.idUsuario= req.user.id;

        let id = await db.inserirDiario(pessoa);
        
        resp.send({
            novoid:id
        })
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/alterar/diario/:id', async (req, resp) =>{
    try{
        let id = req.params.id;
        let pessoa = req.body;

        let linhasAfetadas = await db.alterarDiario(id, pessoa);
        if(linhasAfetadas >= 1){
            resp.send();
        }
        else{
           resp.status(404).send({ erro : 'Nenhum registro encontrado'})
        }
    }
    catch (err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/deletar/listaNegra/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.deletarDiario(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;