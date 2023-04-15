"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ServerError';
    }
}
exports.ServerError = ServerError;
