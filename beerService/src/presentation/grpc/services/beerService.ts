import { AddBeerRequest, Beer, BeerServiceServer, DeleteBeerRequest, GetBeerByCloserAverageTemperatureRequest } from "../../../../proto/beer"
import { GetBeersParams, UpdateBeerParams, UpdateBeerResponse } from "../../../usecases"
import { GrpcProcedure } from "../protocols/grpcProcedure"

export const BeerService = {
  addBeer(useCase: GrpcProcedure<AddBeerRequest, Beer>): BeerServiceServer['addBeer'] {
    return async function (call, callback) {
      const [error, createdBeer] = await useCase.execute(call.request)
      callback(error, createdBeer)
    }
  },
  getAllBeers(useCase: GrpcProcedure<void, Beer[]>): BeerServiceServer['getAllBeers'] {
    return async function (call, callback) {
      const [errors, beers] = await useCase.execute()
      callback(errors, { beers: beers || [] })
    }
  },
  getBeerByType(useCase: GrpcProcedure<GetBeersParams, Beer[]>): BeerServiceServer['getBeerByType'] {
    return async (call, callback) => {
      const [error, beers] = await useCase.execute({ type: call.request.type })
      callback(error, beers ? beers[0] : null)
    }
  },
  deleteBeer(useCase: GrpcProcedure<DeleteBeerRequest, Beer>): BeerServiceServer['deleteBeer'] {
    return async (call, callback) => {
      const [error, deletedBeer] = await useCase.execute({ id: call.request.id })
      callback(error, deletedBeer)
    }
  },
  updateBeer(useCase: GrpcProcedure<UpdateBeerParams, UpdateBeerResponse>): BeerServiceServer['updateBeer'] {
    return async (call, callback) => {
      const [error, updatedBeer] = await useCase.execute({
        id: call.request.id,
        data: {
          type: call.request.type,
          maxTemperature: call.request.maxTemperature,
          minTemperature: call.request.minTemperature
        }
      })
      callback(error, updatedBeer)
    }
  },
  getBeerByCloserAverageTemperature(useCase: GrpcProcedure<GetBeerByCloserAverageTemperatureRequest, Beer>): BeerServiceServer['getBeerByCloserAverageTemperature'] {
    return async (call, callback) => {
      const [error, beer] = await useCase.execute({ temperature: call.request.temperature })
      callback(error, beer)
    }
  }
}
