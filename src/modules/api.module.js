'use strict';

const apiService = require('../services/api.service');

const getHeroesModule = async () => {
    try {
        const serviceResponse = await apiService.getHeroesService();
        console.log('Heroes Obtenidos')
        return serviceResponse;
    } catch(error) {
        throw error;
    }
};

module.exports = {
    getHeroesModule
};