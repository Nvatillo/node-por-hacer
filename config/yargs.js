const argv = require('yargs')
    .command('crear', 'Crea una nota', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'

        }
    })
    .command('actualizar', 'actualiza una nota', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como completado o pendiente'

        }

    }).command('borrar', 'borra una nota', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'borra de la tarea por hacer'
        }
    })
    .help()
    .argv






module.exports = {
    argv
};