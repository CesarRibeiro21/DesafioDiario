import diarioController from '../src/controller/diarioController.js'
import usuarioController from '../src/controller/usuarioController.js'


export default function adicionarRotas(servidor) {
    servidor.use(diarioController);
    servidor.use(usuarioController);
}
