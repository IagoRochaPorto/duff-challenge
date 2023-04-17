import { Beer } from "../../models/beer"

export interface DeleteBeerRepository {
  deleteBeer(beer: DeleteBeerRepository.Params): Promise<DeleteBeerRepository.Result>
}

export namespace DeleteBeerRepository {
  export type Params = {
    id: number
  }
  export type Result = Beer
}
