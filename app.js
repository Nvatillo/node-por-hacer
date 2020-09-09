const argv = require('./config/yargs').argv;
const porhacer = require('./por_hacer/por_hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.description);
        console.log(tarea);
        break;
    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;
    case 'listar':
        let listado = porhacer.getListado();
        for (const iterator of listado) {

            console.log('===========POR HACER==========='.green);
            console.log('Descripcion : ', iterator.descripcion);
            console.log('Estado : ', iterator.completado);
            console.log('============================== '.green);
        }
        break;
    case 'borrar':
        let borrar = porhacer.borrar(argv.description);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');
        break;
}