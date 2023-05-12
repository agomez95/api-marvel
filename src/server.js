'use strict';

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const config = require('./config/globalConfig');

const apiRoute = require('./routes/api.route');

const startServer = () => {
    app.use(express.json());
    app.use(helmet());
    app.use(cors());

    app.use('/api/heroes', apiRoute);

    app.listen(config.port, () => {
        console.log(`Server corriendo en el puerto: ${config.port}`);
    });
};

startServer();