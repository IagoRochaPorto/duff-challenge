"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddBeerUseCase = void 0;
const beerRepository_1 = require("../../../repositories/beerRepository");
const usecases_1 = require("../../../usecases");
const grpcUseCaseAdapter_1 = require("../../adapters/grpcUseCaseAdapter");
function makeAddBeerUseCase() {
    const useCase = new usecases_1.AddBeer(new beerRepository_1.BeerRepository());
    return new grpcUseCaseAdapter_1.GrpcUseCaseAdapter(useCase);
}
exports.makeAddBeerUseCase = makeAddBeerUseCase;