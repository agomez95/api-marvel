'use strict';

class ModuleError extends Error {
    constructor(cause) {
        let causeAux;
        let causeMessageAux;
        if(cause instanceof Error) {
            causeMessageAux = cause.message;
            causeAux = cause;
        } else {
            causeMessageAux = cause;
        }
        super(causeMessageAux);
        if (causeAux) this.cause = causeAux;
        this.name = 'ModuleError';
        this.message = causeMessageAux;
    }
}

module.exports = ModuleError;