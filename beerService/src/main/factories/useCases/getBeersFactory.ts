import { BeerRepository } from "../../../infra/db/prisma/repositories/beerRepository"
import { GetBeers, GetBeersParams, GetBeersResponse } from "../../../usecases"
import { GrpcUseCaseAdapter } from "../../adapters/grpcUseCaseAdapter"

export function makeGetBeers() {
  const useCase = new GetBeers(new BeerRepository())
  return new GrpcUseCaseAdapter<GetBeersParams | void, GetBeersResponse>(useCase)
}