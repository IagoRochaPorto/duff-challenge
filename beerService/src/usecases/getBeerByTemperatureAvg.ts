import { Beer } from "../../proto/beer";
import { BeerRepository } from "../repositories/beerRepository";
import { UseCase } from '../shared/types/useCase'

export type GetBeerByTemperatureAvgParams = {
  temperature: number
}

export type GetBeerByTemperatureAvgResponse = Beer

export class GetBeerByTemperatureAvg implements UseCase<GetBeerByTemperatureAvgParams, GetBeerByTemperatureAvgResponse> {
  constructor(private readonly beerRepository: BeerRepository) { }

  async execute(params: GetBeerByTemperatureAvgParams): Promise<Beer> {
    const beers = await this.beerRepository.raw<Beer[]>(`
      SELECT *, ABS(?  - ((minTemperature + maxTemperature) / 2)) as averageTemperature 
      FROM Beer
      ORDER BY ABS(?  - ((minTemperature + maxTemperature) / 2));
    `, params.temperature, params.temperature);

    return beers[0]
  }
}
