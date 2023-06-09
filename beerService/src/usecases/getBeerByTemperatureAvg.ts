import { Beer } from "../proto/beer";
import { RawSqlRepository } from "../repositories/rawSqlRepository";
import { NotFoundError } from "../shared/errors";
import { UseCase } from '../shared/types/useCase'

export type GetBeerByTemperatureAvgParams = {
  temperature: number
}

export type GetBeerByTemperatureAvgResponse = Beer

export class GetBeerByTemperatureAvg implements UseCase<GetBeerByTemperatureAvgParams, GetBeerByTemperatureAvgResponse> {
  constructor(private readonly repository: RawSqlRepository) { }

  async execute(params: GetBeerByTemperatureAvgParams): Promise<Beer> {
    const beers = await this.repository.raw<Beer[]>(`
      SELECT *, ABS(?  - ((minTemperature + maxTemperature) / 2)) as averageTemperature 
      FROM Beer
      ORDER BY ABS(?  - ((minTemperature + maxTemperature) / 2));
    `, params.temperature, params.temperature);

    if (!beers?.length) {
      throw new NotFoundError('Beer not found')
    }

    return beers[0]
  }
}
