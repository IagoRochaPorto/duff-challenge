import { Server, ServerCredentials } from '@grpc/grpc-js'
import { makePlaylistService } from '../factories'

export function initServer(): void {
  const app = new Server()

  makePlaylistService(app)


  if (!process.env.SERVER_HOST) throw new Error("SERVER_HOST not found")

  app.bindAsync(process.env.SERVER_HOST, ServerCredentials.createInsecure(), () => {
    app.start()
    console.log("Server running at http://localhost:8081")
  })
}
