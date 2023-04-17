import { Beer } from "../../models/beer"

export interface UpdateBeerRepository {
  updateBeer(beer: UpdateBeerRepository.Params): Promise<UpdateBeerRepository.Result>
}

export namespace UpdateBeerRepository {
  export type Params = {
    id: number
    data: Partial<Omit<Beer, 'id'>>
  }

  export type Result = Beer
}
