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
exports.BeerService = void 0;
exports.BeerService = {
    addBeer(useCase) {
        return function (call, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                const [error, createdBeer] = yield useCase.execute(call.request);
                callback(error, createdBeer);
            });
        };
    },
    getAllBeers(useCase) {
        return function (call, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                const [errors, beers] = yield useCase.execute();
                callback(errors, { beers: beers || [] });
            });
        };
    },
    getBeerByType(useCase) {
        return (call, callback) => __awaiter(this, void 0, void 0, function* () {
            const [error, beers] = yield useCase.execute({ type: call.request.type });
            callback(error, beers ? beers[0] : null);
        });
    },
    deleteBeer(useCase) {
        return (call, callback) => __awaiter(this, void 0, void 0, function* () {
            const [error, deletedBeer] = yield useCase.execute({ id: call.request.id });
            callback(error, deletedBeer);
        });
    },
    updateBeer(useCase) {
        return (call, callback) => __awaiter(this, void 0, void 0, function* () {
            const [error, updatedBeer] = yield useCase.execute({
                id: call.request.id,
                data: {
                    type: call.request.type,
                    maxTemperature: call.request.maxTemperature,
                    minTemperature: call.request.minTemperature
                }
            });
            callback(error, updatedBeer);
        });
    },
    getBeerByCloserAverageTemperature(useCase) {
        return (call, callback) => __awaiter(this, void 0, void 0, function* () {
            const [error, beer] = yield useCase.execute({ temperature: call.request.temperature });
            callback(error, beer);
        });
    }
};
