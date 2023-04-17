import { Beer } from "../proto/beer";
import { DeleteBeerRepository } from "../repositories/beer";

export type DeleteBeerParams = { id: number }
export type DeleteBeerResponse = Beer

export class DeleteBeer {
  constructor(private readonly beerRepository: DeleteBeerRepository) { }

  async execute(params: DeleteBeerParams): Promise<DeleteBeerResponse> {
    const deletedBeer = await this.beerRepository.deleteBeer(params)
    return deletedBeer
  }
}
