import { Beer } from "../proto/beer";
import { BeerRepository } from "../repositories/beerRepository";

export type DeleteBeerParams = { id: number }
export type DeleteBeerResponse = Beer

export class DeleteBeer {
  constructor(private readonly beerRepository: BeerRepository) { }

  async execute({ id }: DeleteBeerParams): Promise<DeleteBeerResponse> {
    const deletedBeer = await this.beerRepository.delete(id)
    return deletedBeer
  }
}
