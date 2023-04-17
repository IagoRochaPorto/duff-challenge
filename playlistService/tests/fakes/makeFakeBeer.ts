import { Beer } from "../../src/models/beer";

export function makeFakeBeer(): Beer {
  return {
    id: 1,
    maxTemperature: 10,
    minTemperature: 5,
    type: 'any_type'
  }
}