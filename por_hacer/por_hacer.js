const fs = require('fs');
const { get } = require('https');


let listado_por_hacer = [];
const guardarBD = () => {
    let data = JSON.stringify(listado_por_hacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    })
}


const cargarBD = () => {
    try {
        listado_por_hacer = require('../db/data.json');

    } catch (error) {
        listado_por_hacer = [];
    }
}


const crear = (descripcion) => {
    cargarBD();
    let por_hacer = {
        descripcion,
        completado: false
    };

    listado_por_hacer.push(por_hacer);
    guardarBD();
    return por_hacer;
}
const getListado = () => {
    cargarBD();
    return listado_por_hacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listado_por_hacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listado_por_hacer[index].completado = completado;
        guardarBD();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarBD();
    let tarea = listado_por_hacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listado_por_hacer.length === tarea.length) {
        return false;
    } else {
        listado_por_hacer = tarea;
        guardarBD();
        return true;
    }

}
module.exports = { crear, getListado, actualizar, borrar };