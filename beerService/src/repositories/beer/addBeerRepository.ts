import { Beer } from "../../models/beer"

export interface AddBeerRepository {
  addBeer(beer: AddBeerRepository.Params): Promise<AddBeerRepository.Result>
}

export namespace AddBeerRepository {
  export type Params = Omit<Beer, 'id'>
  export type Result = Beer
}
