import { PlaylistServiceServer } from '../../../proto/playlist'
import { makeGetPlaylist } from './index'

export function makePlaylistService(): PlaylistServiceServer {
  return {
    getPlayListByTemperature: async (call, callback) => {
      const useCase = makeGetPlaylist()
      const [error, playlist] = await useCase.execute(call.request)
      callback(error, playlist)
    }
  }
}