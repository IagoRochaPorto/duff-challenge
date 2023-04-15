"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeGetBeerByCloserAverageTemperature = void 0;
const beerRepository_1 = require("../../../repositories/beerRepository");
const getBeerByTemperatureAvg_1 = require("../../../usecases/getBeerByTemperatureAvg");
const grpcUseCaseAdapter_1 = require("../../adapters/grpcUseCaseAdapter");
function makeGetBeerByCloserAverageTemperature() {
    const getBeerByCloserAverageTemperature = new getBeerByTemperatureAvg_1.GetBeerByTemperatureAvg(new beerRepository_1.BeerRepository());
    return new grpcUseCaseAdapter_1.GrpcUseCaseAdapter(getBeerByCloserAverageTemperature);
}
exports.makeGetBeerByCloserAverageTemperature = makeGetBeerByCloserAverageTemperature;
