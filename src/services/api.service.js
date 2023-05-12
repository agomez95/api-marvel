'use strict';

const config = require('../config/globalConfig');
const axios = require('axios');
const encrypter = require('../utils/encrypter');

const getHeroesService = async () => {
    try {
        const ts = Date.now().toString();
        const hash = encrypter(config.publickey, config.privatekey);
        const url = `${config.url}characters?ts=${ts}&apikey=${config.publickey}&hash=${hash}`;
        const { data } = await axios.get(url);

        const listOfHeroes = data.data.results;
        const arrayFinal = [];

        for (let item of listOfHeroes) {
            const obj = {};
            obj['id'] = item.id;
            obj['nombre'] = item.name;
            obj['descripcion'] = item.description;       
            obj['imagen'] = item.thumbnail['path'] + "." + item.thumbnail['extension'];
            arrayFinal.push(obj);
        }

        return arrayFinal;
    } catch(error) {
        console.log(error)
        throw error;
    }
};

module.exports = {
    getHeroesService
};