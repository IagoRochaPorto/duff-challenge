import { Beer } from "../../proto/beer"

export interface GetBeerRepository {
  getBeers(beer: GetBeerRepository.Params): Promise<GetBeerRepository.Result>
}

export namespace GetBeerRepository {
  export type Params = {
    skip?: number
    take?: number
    where?: Partial<Beer>
  }
  export type Result = Beer[]
}
