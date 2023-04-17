import { BeerGateway } from "../../../infra/gateways/grpc/beerGateway";
import { PlaylistGateway } from "../../../infra/gateways/spotifyApi/playlistGateway";
import { GetPlaylistByBeerTemperature, GetPlaylistByBeerTemperatureParams, GetPlaylistByBeerTemperatureResponse } from "../../../useCases/getPlaylist";
import { GrpcUseCaseAdapter } from '../../adapters/grpcUseCaseAdapter'

export function makeGetPlaylist() {
  const {
    CLIENT_ID,
    CLIENT_SECRET,
    BEER_SERVICE_HOST,
  } = process.env

  if (CLIENT_ID && CLIENT_SECRET && BEER_SERVICE_HOST) {
    const useCase = new GetPlaylistByBeerTemperature(
      new BeerGateway(BEER_SERVICE_HOST),
      new PlaylistGateway(CLIENT_ID, CLIENT_SECRET)
    )

    return new GrpcUseCaseAdapter<GetPlaylistByBeerTemperatureParams, GetPlaylistByBeerTemperatureResponse>(useCase)
  } else {
    throw new Error('Missing env vars')
  }
}
