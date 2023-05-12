const apiModule = require('../modules/api.module');

const getHeroesController = async (req, res) => {
    try {
        const moduleResponse = await apiModule.getHeroesModule();
        res.status(200).json({
            err_code: 0,
            status: 200,
            //...moduleResponse
            response: moduleResponse
        });
    } catch(error) {
        res.status(error.statusCode || 500).json({            
            err_code: 1,
            status: error.statusCode || 500,
            err_msg: error.message || 'Error interno',
        }); 
    }
};

module.exports = {
    getHeroesController
}