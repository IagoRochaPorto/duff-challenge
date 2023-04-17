import { Beer } from "../models/beer";

export interface GetBeerByTemperatureAvgGateway {
  getBeerByTemperatureAvg(params: GetBeerByTemperatureAvgGateway.Params): Promise<GetBeerByTemperatureAvgGateway.Response>
}

export namespace GetBeerByTemperatureAvgGateway {
  export type Params = {
    temperature: number
  }
  export type Response = Beer
}
