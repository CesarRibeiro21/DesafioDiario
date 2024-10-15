import diarioController from '../src/controller/diarioController'



export default function adicionarRotas(servidor) {
    servidor.use(diarioController);
}
