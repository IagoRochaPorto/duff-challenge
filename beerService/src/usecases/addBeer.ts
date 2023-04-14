import { Beer } from "../models/beer";
import { BeerRepository } from "../repositories/beerRepository";
import { UseCase } from "../shared/types/useCase";

export type AddBeerParams = Omit<Beer, 'id'>
export type AddBeerResponse = Beer

export class AddBeer implements UseCase<AddBeerParams, AddBeerResponse> {
  constructor(private readonly beerRepository: BeerRepository) { }

  async execute(beer: AddBeerParams): Promise<AddBeerResponse> {
    const createdBeer = await this.beerRepository.add(beer);
    return createdBeer
  }
}
