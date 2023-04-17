import { Prisma } from "@prisma/client";
import { AddBeerRepository, DeleteBeerRepository, GetBeerRepository, UpdateBeerRepository } from "../../../../repositories/beer";
import { DbConnection } from "../connection";
import { AlreadyExistsError } from "../../../../shared/errors/alreadyExistsError";
import { ServerError } from "../../../../shared/errors";
import { BaseRepository } from "./baseRepository";

export class BeerRepository extends BaseRepository implements
  AddBeerRepository,
  GetBeerRepository,
  DeleteBeerRepository,
  UpdateBeerRepository {
  async addBeer(beer: AddBeerRepository.Params): Promise<AddBeerRepository.Result> {
    const connection = DbConnection.getInstance()

    try {
      const createdBeer = await connection.beer.create({
        data: {
          type: beer.type,
          maxTemperature: beer.maxTemperature,
          minTemperature: beer.minTemperature,
        }
      })

      return createdBeer
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code == 'P2002') {
        throw new AlreadyExistsError('Beer already exists')
      }
      throw new ServerError('Internal server error')
    }
  }

  async getBeers(filter: GetBeerRepository.Params): Promise<GetBeerRepository.Result> {
    const connection = DbConnection.getInstance()
    const beers = await connection.beer.findMany(filter)
    return beers
  }

  async deleteBeer(params: DeleteBeerRepository.Params): Promise<DeleteBeerRepository.Result> {
    const connection = DbConnection.getInstance()
    const deletedBeer = await connection.beer.delete({
      where: {
        id: params.id
      }
    })
    return deletedBeer
  }

  async updateBeer(params: UpdateBeerRepository.Params): Promise<UpdateBeerRepository.Result> {
    const connection = DbConnection.getInstance()
    const updatedBeer = await connection.beer.update({
      where: { id: params.id },
      data: params.data
    })
    return updatedBeer
  }
}
