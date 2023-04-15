import { initServer } from './config/initServer'

try {
  initServer()
} catch (error) {
  console.log(error)
}