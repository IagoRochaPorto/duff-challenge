import { Server } from '@grpc/grpc-js'
import { PlaylistServiceServer, PlaylistServiceService } from '../../../../proto/playlist'
import { makeGetPlaylist } from '../../index'

export function makePlaylistService(app: Server) {
  const service: PlaylistServiceServer = {
    getPlayListByTemperature: async (call, callback) => {
      const useCase = makeGetPlaylist()
      const [error, playlist] = await useCase.execute(call.request)
      callback(error, playlist)
    }
  }
  app.addService(PlaylistServiceService, service)
}