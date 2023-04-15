"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBeerService = void 0;
const beerService_1 = require("../../../../presentation/grpc/services/beerService");
const useCases_1 = require("../../useCases");
const beer_1 = require("../../../../proto/beer");
function makeBeerService(app) {
    const service = {
        addBeer: beerService_1.BeerService.addBeer((0, useCases_1.makeAddBeerUseCase)()),
        deleteBeer: beerService_1.BeerService.deleteBeer((0, useCases_1.makeDeleteBeer)()),
        getAllBeers: beerService_1.BeerService.getAllBeers((0, useCases_1.makeGetBeers)()),
        getBeerByCloserAverageTemperature: beerService_1.BeerService.getBeerByCloserAverageTemperature((0, useCases_1.makeGetBeerByCloserAverageTemperature)()),
        getBeerByType: beerService_1.BeerService.getBeerByType((0, useCases_1.makeGetBeers)()),
        updateBeer: beerService_1.BeerService.updateBeer((0, useCases_1.makeUpdateBeer)())
    };
    app.addService(beer_1.BeerServiceService, service);
}
exports.makeBeerService = makeBeerService;
