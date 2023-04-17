import { credentials } from '@grpc/grpc-js';
import { BeerServiceClient } from '../../../proto/beer'
import { Status } from '@grpc/grpc-js/build/src/constants';
import { NotFoundError, ServerError } from '../../../shared/errors';
import { GetBeerByTemperatureAvgGateway } from '../../../gateways/getBeerByTemperatureAvgGateway';

export class BeerGateway implements GetBeerByTemperatureAvgGateway {
  private client: BeerServiceClient
  constructor(host: string) {
    this.client = new BeerServiceClient(host, credentials.createInsecure())
  }

  async getBeerByTemperatureAvg({ temperature }: GetBeerByTemperatureAvgGateway.Params): Promise<GetBeerByTemperatureAvgGateway.Response> {
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
