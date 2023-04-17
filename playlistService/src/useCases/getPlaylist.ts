import { GetBeerByTemperatureAvgGateway } from "../gateways/getBeerByTemperatureAvgGateway";
import { GetPlaylistBySearchValueGateway } from "../gateways/getPlaylistBySearchValueGateway";
import { Playlist } from "../models/playlist";
import { UseCase } from "../shared/types/useCase";

export type GetPlaylistByBeerTemperatureParams = {
  temperature: number
}

export type GetPlaylistByBeerTemperatureResponse = {
  beerStyle: string
  playlist: Playlist
}

export class GetPlaylistByBeerTemperature implements UseCase<GetPlaylistByBeerTemperatureParams, GetPlaylistByBeerTemperatureResponse> {
  constructor(
    private beerGateway: GetBeerByTemperatureAvgGateway,
    private playlistGateway: GetPlaylistBySearchValueGateway,
  ) { }

  async execute({ temperature }: GetPlaylistByBeerTemperatureParams): Promise<GetPlaylistByBeerTemperatureResponse> {
    const beer = await this.beerGateway.getBeerByTemperatureAvg({ temperature })
    const playlist = await this.playlistGateway.getPlaylistBySearchValue({
      searchValue: `${beer.type} beer`
    })

    return {
      beerStyle: beer.type,
      playlist
    }
  }
}
