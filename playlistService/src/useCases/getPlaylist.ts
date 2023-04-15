import { BeerGateway } from "../gateways/beerGateway";
import { PlaylistGateway } from "../gateways/playlistGateway";
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
    private beerGateway: BeerGateway,
    private playlistGateway: PlaylistGateway,
  ) { }

  async execute(params: GetPlaylistByBeerTemperatureParams): Promise<GetPlaylistByBeerTemperatureResponse> {
    const beer = await this.beerGateway.getBeerByTemperatureAvg(params.temperature)
    const playlist = await this.playlistGateway.getPlaylistBySearchValue(`${beer.type} beer`)

    return {
      beerStyle: beer.type,
      playlist
    }
  }
}
