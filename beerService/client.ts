import { credentials } from '@grpc/grpc-js'
import { BeerServiceClient } from './proto/beer'

const client = new BeerServiceClient('localhost:8080', credentials.createInsecure())

client.getBeerByCloserAverageTemperature({ temperature: -2 }, (error, response) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(response)
})