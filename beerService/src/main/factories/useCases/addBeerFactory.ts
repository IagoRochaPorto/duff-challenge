import { BeerRepository } from "../../../repositories/beerRepository";
import { AddBeer, AddBeerParams, AddBeerResponse } from "../../../usecases";
import { GrpcUseCaseAdapter } from "../../adapters/grpcUseCaseAdapter";

export function makeAddBeerUseCase() {
  const useCase = new AddBeer(new BeerRepository())
  return new GrpcUseCaseAdapter<AddBeerParams, AddBeerResponse>(useCase)
}
