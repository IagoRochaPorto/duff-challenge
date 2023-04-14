import { Beer } from "../models/beer"
import { BeerRepository } from "../repositories/beerRepository"

export type UpdateBeerParams = {
  id: number
  data: {
    type?: string
    maxTemperature?: number
    minTemperature?: number
  }
}

export type UpdateBeerResponse = Beer

export class UpdateBeer {
  constructor(private readonly beerRepository: BeerRepository) { }

  async execute(params: UpdateBeerParams): Promise<UpdateBeerResponse> {
    const updatedBeer = await this.beerRepository.update(params.id, params.data)
    return updatedBeer
  }
}