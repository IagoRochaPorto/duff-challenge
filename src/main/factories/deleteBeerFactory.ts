import { BeerRepository } from "../../repositories/beerRepository"
import { DeleteBeer, DeleteBeerParams, DeleteBeerResponse } from "../../usecases"
import { GrpcUseCaseAdapter } from "../adapters/grpcUseCaseAdapter"

export function makeDeleteBeer() {
  const useCase = new DeleteBeer(new BeerRepository())
  return new GrpcUseCaseAdapter<DeleteBeerParams, DeleteBeerResponse>(useCase)
}