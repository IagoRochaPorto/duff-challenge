import { Beer } from "../models/beer";
import { BeerRepository } from "../repositories/beerRepository";

export type GetBeersParams = Partial<Beer> | undefined
export type GetBeersResponse = Beer[]

export class GetBeers {
  constructor(private readonly beerRepository: BeerRepository) { }

  async execute(filter: GetBeersParams = undefined): Promise<GetBeersResponse> {
    const beers = await this.beerRepository.getAll(filter);
    return beers
  }
}