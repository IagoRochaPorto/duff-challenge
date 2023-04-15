"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrpcUseCaseAdapter = void 0;
const constants_1 = require("@grpc/grpc-js/build/src/constants");
const errors_1 = require("../../shared/errors");
class GrpcUseCaseAdapter {
    constructor(useCase) {
        this.useCase = useCase;
    }
    execute(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.useCase.execute(params);
                return [null, response];
            }
            catch (error) {
                console.error(error);
                const parsedError = this.identifyError(error);
                return [parsedError, null];
            }
        });
    }
    identifyError(error) {
        if (error instanceof errors_1.NotFoundError) {
            return {
                code: constants_1.Status.NOT_FOUND,
                message: error.message,
                name: 'NotFoundError'
            };
        }
        if (error instanceof errors_1.AlreadyExistsError) {
            return {
                code: constants_1.Status.ALREADY_EXISTS,
                message: error.message,
                name: 'AlreadyExistsError'
            };
        }
        return {
            code: constants_1.Status.INTERNAL,
            message: 'Internal error',
            name: 'InternalError'
        };
    }
}
exports.GrpcUseCaseAdapter = GrpcUseCaseAdapter;
