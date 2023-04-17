import { Beer } from "../models/beer";
import { UseCase } from "../shared/types/useCase";
import { AddBeerRepository } from "../repositories/beer";

export type AddBeerParams = Omit<Beer, 'id'>
export type AddBeerResponse = Beer

export class AddBeer implements UseCase<AddBeerParams, AddBeerResponse> {
  constructor(private readonly beerRepository: AddBeerRepository) { }

  async execute(beer: AddBeerParams): Promise<AddBeerResponse> {
    const createdBeer = await this.beerRepository.addBeer(beer);
    return createdBeer
  }
}
