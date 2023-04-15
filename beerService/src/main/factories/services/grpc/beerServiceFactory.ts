import { Server } from "@grpc/grpc-js";
import { BeerServiceServer, BeerServiceService } from "../../../../../proto/beer";
import { BeerService } from '../../../../presentation/grpc/services/beerService'
import { makeAddBeerUseCase, makeDeleteBeer, makeGetBeers, makeUpdateBeer } from "../../useCases";

export function makeBeerService(app: Server) {
  const service: BeerServiceServer = {
    addBeer: BeerService.addBeer(makeAddBeerUseCase()),
    deleteBeer: BeerService.deleteBeer(makeDeleteBeer()),
    getAllBeers: BeerService.getAllBeers(makeGetBeers()),
    getBeerByCloserAverageTemperature: BeerService.getBeerByCloserAverageTemperature(makeGetBeers()),
    getBeerByType: BeerService.getBeerByType(makeGetBeers()),
    updateBeer: BeerService.updateBeer(makeUpdateBeer())
  }
  app.addService(BeerServiceService, service)
}
