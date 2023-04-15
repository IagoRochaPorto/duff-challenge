import { Server, ServerCredentials } from "@grpc/grpc-js";
import { makeBeerService } from "../factories/services/grpc/beerServiceFactory";

export function initApp(): void {
  const app = new Server()

  makeBeerService(app)

  const host = `${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '8080'}`
  app.bindAsync(host, ServerCredentials.createInsecure(), () => {
    app.start()
    console.log("Server running at http://localhost:8080")
  })
}
