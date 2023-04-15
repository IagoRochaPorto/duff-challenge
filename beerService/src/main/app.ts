import { initDatabase } from './config/initDatabase'
import { initApp } from './config/initApp'

try {
  initDatabase()
  initApp()
} catch (error) {
  console.log(error)
}
