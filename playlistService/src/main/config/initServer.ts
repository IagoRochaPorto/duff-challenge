import { Server, ServerCredentials } from '@grpc/grpc-js'
import { makePlaylistService } from '../factories'

export function initServer(): void {
  const app = new Server()

  makePlaylistService(app)

  const host = `${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '8081'}`

  app.bindAsync(host, ServerCredentials.createInsecure(), () => {
    app.start()
    console.log("Server running at http://localhost:8080")
  })
}
