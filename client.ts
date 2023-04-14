import { credentials } from '@grpc/grpc-js'
import { BeerServiceClient } from './proto/beer'

const client = new BeerServiceClient('localhost:8080', credentials.createInsecure())

client.addBeer({ type: 'Testees', maxTemperature: 10, minTemperature: 5 }, (err, response) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(response)
})
