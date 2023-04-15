import { BeerGateway } from "../../../gateways/beerGateway";
import { PlaylistGateway } from "../../../gateways/playlistGateway";
import { GetPlaylistByBeerTemperature, GetPlaylistByBeerTemperatureParams, GetPlaylistByBeerTemperatureResponse } from "../../../useCases/getPlaylist";
import { GrpcUseCaseAdapter } from '../../adapters/grpcUseCaseAdapter'

export function makeGetPlaylist() {
  const {
    CLIENT_ID,
    CLIENT_SECRET,
    BEER_SERVICE_HOST,
    BEER_SERVICE_PORT
  } = process.env

  if (CLIENT_ID && CLIENT_SECRET && BEER_SERVICE_HOST && BEER_SERVICE_PORT) {
    const useCase = new GetPlaylistByBeerTemperature(
      new BeerGateway(`${BEER_SERVICE_HOST}:${BEER_SERVICE_PORT}`),
      new PlaylistGateway(CLIENT_ID, CLIENT_SECRET)
    )

    return new GrpcUseCaseAdapter<GetPlaylistByBeerTemperatureParams, GetPlaylistByBeerTemperatureResponse>(useCase)
  } else {
    throw new Error('Missing env vars')
  }
}