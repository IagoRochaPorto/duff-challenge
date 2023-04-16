import { Server, ServerCredentials } from "@grpc/grpc-js";
import { makeBeerService } from "../factories/services/grpc/beerServiceFactory";

export function initApp(): void {
  const app = new Server()

  makeBeerService(app)

  if (process.env.SERVER_HOST) {
    app.bindAsync(process.env.SERVER_HOST, ServerCredentials.createInsecure(), () => {
      app.start()
      console.log("Server running at http://localhost:8080")
    })
  } else {
    throw new Error("SERVER_HOST not found")
  }
}
