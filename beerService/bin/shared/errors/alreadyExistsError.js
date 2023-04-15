"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlreadyExistsError = void 0;
class AlreadyExistsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AlreadyExistsError';
    }
}
exports.AlreadyExistsError = AlreadyExistsError;
