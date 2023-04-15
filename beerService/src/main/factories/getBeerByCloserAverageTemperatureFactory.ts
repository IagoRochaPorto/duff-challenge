import { BeerRepository } from "../../repositories/beerRepository";
import { FindBeerByTemperature, FindBeerByTemperatureParams, FindBeerByTemperatureResponse } from "../../usecases/getBeerByCloserAverageTemperature";
import { GrpcUseCaseAdapter } from "../adapters/grpcUseCaseAdapter";

export function makeGetBeerByCloserAverageTemperature() {
  const getBeerByCloserAverageTemperature = new FindBeerByTemperature(new BeerRepository())
  return new GrpcUseCaseAdapter<FindBeerByTemperatureParams, FindBeerByTemperatureResponse>(getBeerByCloserAverageTemperature)
}