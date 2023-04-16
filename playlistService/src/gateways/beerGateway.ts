import { credentials } from '@grpc/grpc-js';
import { Beer } from '../models/beer'
import { BeerServiceClient } from '../proto/beer'
import { Status } from '@grpc/grpc-js/build/src/constants';
import { NotFoundError, ServerError } from '../shared/errors';

export class BeerGateway {
  private client: BeerServiceClient
  constructor(host: string) {
    this.client = new BeerServiceClient(host, credentials.createInsecure())
  }

  async getBeerByTemperatureAvg(temperature: number): Promise<Beer> {
    return new Promise((resolve, reject) => {
      this.client.getBeerByCloserAverageTemperature({ temperature }, (error, response) => {
        if (error) {
          if (error.code === Status.NOT_FOUND) {
            reject(new NotFoundError('No data found'))
          } else {
            reject(new ServerError('Internal server error'))
          }
          return
        }
        resolve(response)
      })
    })
  }
}