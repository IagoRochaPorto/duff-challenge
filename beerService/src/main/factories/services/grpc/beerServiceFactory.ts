import { Server } from "@grpc/grpc-js";
import { BeerService } from '../../../../presentation/grpc/services/beerService'
import { makeAddBeerUseCase, makeDeleteBeer, makeGetBeers, makeUpdateBeer, makeGetBeerByCloserAverageTemperature } from "../../useCases";
import { BeerServiceServer, BeerServiceService } from "../../../../proto/beer";

export function makeBeerService(app: Server) {
  const service: BeerServiceServer = {
    addBeer: BeerService.addBeer(makeAddBeerUseCase()),
    deleteBeer: BeerService.deleteBeer(makeDeleteBeer()),
    getAllBeers: BeerService.getAllBeers(makeGetBeers()),
    getBeerByCloserAverageTemperature: BeerService.getBeerByCloserAverageTemperature(makeGetBeerByCloserAverageTemperature()),
    getBeerByType: BeerService.getBeerByType(makeGetBeers()),
    updateBeer: BeerService.updateBeer(makeUpdateBeer())
  }
  app.addService(BeerServiceService, service)
}
