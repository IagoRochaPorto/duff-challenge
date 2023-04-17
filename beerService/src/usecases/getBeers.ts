import { Beer } from "../models/beer";
import { GetBeerRepository } from "../repositories/beer/getBeerRepository";
import { NotFoundError } from "../shared/errors";

export type GetBeersParams = Partial<Beer> | undefined
export type GetBeersResponse = Beer[]

export class GetBeers {
  constructor(private readonly beerRepository: GetBeerRepository) { }

  async execute(filter: GetBeersParams = undefined): Promise<GetBeersResponse> {
    const beers = await this.beerRepository.getBeers({ where: filter });

    if (!beers?.length) {
      throw new NotFoundError('Beer not found')
    }
    return beers
  }
}
