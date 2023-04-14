import { Server, ServerCredentials } from "@grpc/grpc-js";
import { makeBeerService } from "../factories";
import { BeerServiceService } from "../../../proto/beer";

export function initServer(): void {
  const app = new Server()

  const beerService = makeBeerService()

  app.addService(BeerServiceService, beerService)

  const host = `${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '8080'}`
  app.bindAsync(host, ServerCredentials.createInsecure(), () => {
    app.start()
    console.log("Server running at http://localhost:8080")
  })
}
