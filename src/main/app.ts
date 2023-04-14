import { initDatabase } from './config/initDatabase'
import { initServer } from './config/initServer'

try {
  initDatabase()
  initServer()
} catch (error) {
  console.log(error)
}
