import { BeerRepository } from "../../../repositories/beerRepository"
import { GetBeerByTemperatureAvg, GetBeerByTemperatureAvgParams, GetBeerByTemperatureAvgResponse } from "../../../usecases/getBeerByTemperatureAvg"
import { GrpcUseCaseAdapter } from "../../adapters/grpcUseCaseAdapter"

export function makeGetBeerByCloserAverageTemperature() {
  const getBeerByCloserAverageTemperature = new GetBeerByTemperatureAvg(new BeerRepository())
  return new GrpcUseCaseAdapter<GetBeerByTemperatureAvgParams, GetBeerByTemperatureAvgResponse>(getBeerByCloserAverageTemperature)
}