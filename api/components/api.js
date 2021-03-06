let apiRules = require('./api-rules');
let logger = require('../../logger/logger');

function _register(app){

    for(let api of apiRules){

        if(api.method === 'post'){
            app.post(api.endpoint, api.function);
            logger.info(`API: ${api.method} ${api.endpoint} is registered`);
        }

        if(api.method === 'get'){
            app.get(api.endpoint, api.function);
            logger.info(`API: ${api.method} ${api.endpoint} is registered`);
        }

        if(api.method === 'put'){
            app.put(api.endpoint, api.function);
            logger.info(`API: ${api.method} ${api.endpoint} is registered`);
        }

        if(api.method === 'delete'){
            app.delete(api.endpoint, api.function);
            logger.info(`API: ${api.method} ${api.endpoint} is registered`);
        }
    }
}

module.exports = {
    _register: _register
};