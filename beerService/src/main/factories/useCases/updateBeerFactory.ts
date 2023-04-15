import { BeerRepository } from "../../../repositories/beerRepository"
import { UpdateBeer, UpdateBeerParams, UpdateBeerResponse } from "../../../usecases"
import { GrpcUseCaseAdapter } from "../../adapters/grpcUseCaseAdapter"

export function makeUpdateBeer() {
  const useCase = new UpdateBeer(new BeerRepository())
  return new GrpcUseCaseAdapter<UpdateBeerParams, UpdateBeerResponse>(useCase)
}