import { Server, ServerCredentials } from '@grpc/grpc-js'
import { makePlaylistService } from '../factories'
import { PlaylistServiceService } from '../../../proto/playlist'

export function initServer(): void {
  const app = new Server()

  const playlistService = makePlaylistService()

  app.addService(PlaylistServiceService, playlistService)

  const host = `${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '8080'}`

  app.bindAsync(host, ServerCredentials.createInsecure(), () => {
    app.start()
    console.log("Server running at http://localhost:8080")
  })
}
