import { initServer } from './config/initServer'
import { config } from 'dotenv'

try {
  config()
  initServer()
} catch (error) {
  console.log(error)
}