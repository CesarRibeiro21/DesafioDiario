import diarioController from '../src/controller/diarioController.js'



export default function adicionarRotas(servidor) {
    servidor.use(diarioController);
}
