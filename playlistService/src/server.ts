import { Server, ServerCredentials } from '@grpc/grpc-js'
import { PlaylistServiceService, PlaylistServiceServer } from '../proto/playlist'
import { GetPlaylistByBeerTemperature } from './useCases/getPlaylist'
import { PlaylistGateway } from './gateways/playlistGateway'
import { BeerGateway } from './gateways/beerGateway'
import { config } from 'dotenv'

config()

const app = new Server()

const playlistServiceServer: PlaylistServiceServer = {
  getPlayListByTemperature: async (call, callback) => {
    if (process.env.CLIENT_ID && process.env.CLIENT_SECRET) {

      const usecase = new GetPlaylistByBeerTemperature(
        new BeerGateway(`${process.env.BEER_SERVICE_HOST}:${process.env.BEER_SERVICE_PORT}`),
        new PlaylistGateway(process.env.CLIENT_ID, process.env.CLIENT_SECRET)
      )
      const response = await usecase.execute(call.request)

      callback(null, response)
    }
  }
}

app.addService(PlaylistServiceService, playlistServiceServer)

const host = `${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '8080'}`

app.bindAsync(host, ServerCredentials.createInsecure(), () => {
  app.start()
  console.log(`Server running at ${host}`)
})
