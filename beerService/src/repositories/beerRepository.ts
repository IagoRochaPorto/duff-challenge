import { Prisma } from "@prisma/client";
import { DbConnection } from "../infra/db/prisma/connection";
import { Beer } from "../models/beer";
import { AlreadyExistsError } from "../shared/errors/alreadyExistsError";
import { ServerError } from "../shared/errors";

export class BeerRepository {
  async add(beer: Omit<Beer, 'id'>): Promise<Beer> {
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

  async getAll(filter: Partial<Beer> = {}): Promise<Beer[]> {
    const connection = DbConnection.getInstance()
    const beers = await connection.beer.findMany({ where: { ...filter } })
    return beers
  }

  async delete(id: number): Promise<Beer> {
    const connection = DbConnection.getInstance()
    const deletedBeer = await connection.beer.delete({ where: { id } })
    return deletedBeer
  }

  async update(id: number, beer: Partial<Omit<Beer, 'id'>>): Promise<Beer> {
    const connection = DbConnection.getInstance()
    const updatedBeer = await connection.beer.update({
      where: { id },
      data: {
        type: beer.type,
        maxTemperature: beer.maxTemperature,
        minTemperature: beer.minTemperature,
      }
    })
    return updatedBeer
  }
}