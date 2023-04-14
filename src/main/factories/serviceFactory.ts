import { BeerServiceServer } from "../../../proto/beer"
import { makeAddBeerUseCase, makeDeleteBeer, makeGetBeers, makeUpdateBeer } from "../factories"

export function makeBeerService(): BeerServiceServer {
  return {
    addBeer: async (call, callback) => {
      try {

        const addBeer = makeAddBeerUseCase()
        const [error, createdBeer] = await addBeer.execute(call.request)
        callback(error, createdBeer)
      } catch (error: any) {
        console.log(error)
        callback(error, null)
      }
    },
    getAllBeers: async (call, callback) => {
      const getBeers = makeGetBeers()
      const [errors, beers] = await getBeers.execute()
      callback(errors, { beers: beers || [] })
    },
    getBeerByType: async (call, callback) => {
      const getBeers = makeGetBeers()
      const [error, beers] = await getBeers.execute({ type: call.request.type })
      callback(error, beers ? beers[0] : null)
    },
    deleteBeer: async (call, callback) => {
      const deleteBeer = makeDeleteBeer()
      const [error, deletedBeer] = await deleteBeer.execute({ id: call.request.id })
      callback(error, deletedBeer)
    },
    updateBeer: async (call, callback) => {
      const updateBeer = makeUpdateBeer()
      const [error, updatedBeer] = await updateBeer.execute({
        id: call.request.id,
        data: {
          type: call.request.type,
          maxTemperature: call.request.maxTemperature,
          minTemperature: call.request.minTemperature
        }
      })
      callback(error, updatedBeer)
    }
  }
}
