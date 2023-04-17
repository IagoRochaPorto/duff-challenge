import { Beer } from "../models/beer"
import { UpdateBeerRepository } from "../repositories/beer"

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
  constructor(private readonly beerRepository: UpdateBeerRepository) { }

  async execute(params: UpdateBeerParams): Promise<UpdateBeerResponse> {
    const updatedBeer = await this.beerRepository.updateBeer({
      id: params.id,
      data: params.data
    })
    return updatedBeer
  }
}
