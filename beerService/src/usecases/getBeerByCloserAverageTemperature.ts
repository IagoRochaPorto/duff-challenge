import { Beer } from "../../proto/beer";
import { BeerRepository } from "../repositories/beerRepository";
import { UseCase } from '../shared/types/useCase'

export type FindBeerByTemperatureParams = {
  temperature: number
}

export type FindBeerByTemperatureResponse = Beer

export class FindBeerByTemperature implements UseCase<FindBeerByTemperatureParams, FindBeerByTemperatureResponse> {
  constructor(private readonly beerRepository: BeerRepository) { }

  async execute(params: FindBeerByTemperatureParams): Promise<Beer> {
    const beers = await this.beerRepository.raw<Beer[]>(`
      SELECT *, ABS(?  - ((minTemperature + maxTemperature) / 2)) as averageTemperature 
      FROM Beer
      ORDER BY ABS(?  - ((minTemperature + maxTemperature) / 2));
    `, params.temperature, params.temperature);

    return beers[0]
  }
}
