'use strict';

let parametro = null;

const cargarEnv = (variable, required = false) => {

    parametro = process.env[variable];
    if(!parametro) {
        if(required) throw new Error('No se ha definido la variable de Entorno con el nombre: ' + variable);
        else return null;
    }

    return parametro;
};

const config = {
    port: cargarEnv('PORT', true),
    publickey: cargarEnv('PUBLICKEY', true),
    privatekey: cargarEnv('PRIVATEKEY', true),
    url: cargarEnv('API', true)
};

module.exports = config;