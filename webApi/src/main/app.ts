import Express from 'express'
import { BeerServiceClient } from '../proto/beer'
import { PlaylistServiceClient } from '../proto/playlist'
import { credentials } from '@grpc/grpc-js'
import { config } from 'dotenv'

config()

const app = Express()
const {
  BEER_SERVICE_HOST,
  PLAYLIST_SERVICE_HOST,
  SERVER_PORT
} = process.env

if (!BEER_SERVICE_HOST) throw new Error('BEER_SERVICE_HOST not found')
if (!PLAYLIST_SERVICE_HOST) throw new Error('PLAYLIST_SERVICE_HOST not found')

const beerClient = new BeerServiceClient(BEER_SERVICE_HOST, credentials.createInsecure())
const playlistClient = new PlaylistServiceClient(PLAYLIST_SERVICE_HOST, credentials.createInsecure())

app.use(Express.json())

app.get('/beer', (req, res) => {
  try {
    beerClient.getAllBeers({}, (err, response) => {
      if (err) {
        console.log('/beer')
        console.log(err)
        res.status(500).send()
      }
      res.send(response?.beers)
    })
  } catch (err) {
    console.log('/beer')
    console.log(err)
    res.status(500).send()
  }
})

app.get('/beer/:type', (req, res) => {
  try {
    beerClient.getBeerByType({ type: req.params.type }, (err, response) => {
      if (err) {
        console.log('/beer/:type')
        console.log(err)
        res.status(500).send()
      }
      res.send(response)
    })
  } catch (err) {
    console.log('/beer/:type')
    console.log(err)
    res.status(500).send()
  }
})

app.post('/beer', (req, res) => {
  try {
    beerClient.addBeer({
      maxTemperature: req.body.maxTemperature,
      minTemperature: req.body.minTemperature,
      type: req.body.type
    }, (err, response) => {
      if (err) {
        console.log('/beer POST')
        console.log(err)
        res.status(500).send()
      }
      res.send(response)
    })
  } catch (err) {
    console.log('/beer POST')
    console.log(err)
    res.status(500).send()
  }
})

app.put('/beer/:id', (req, res) => {
  try {
    beerClient.updateBeer({
      id: parseInt(req.params.id),
      maxTemperature: req.body.maxTemperature,
      minTemperature: req.body.minTemperature,
      type: req.body.type
    }, (err, response) => {
      if (err) {
        console.log('/beer/:id PUT')
        console.log(err)
        res.status(500).send()
      }
      res.send(response)
    })
  } catch (err) {
    console.log('/beer/:id PUT')
    console.log(err)
    res.status(500).send()
  }
})

app.delete('/beer/:id', (req, res) => {
  try {
    beerClient.deleteBeer({ id: req.params.id }, (err, response) => {
      if (err) {
        console.log('/beer/:id DELETE')
        console.log(err)
        res.status(500).send()
      }
      res.send(response)
    })
  } catch (err) {
    console.log('/beer/:id DELETE')
    console.log(err)
    res.status(500).send()
  }
})

app.get('/beer/:temperature/playlist', (req, res) => {
  try {
    playlistClient.getPlayListByTemperature({ temperature: parseInt(req.params.temperature) }, (err, response) => {
      if (err) {
        console.log('/beer/:temperature/playlist GET')
        console.log(err)
        res.status(500).send()
      }
      res.send(response)
    })
  } catch (err) {
    console.log('/beer/:temperature/playlist GET')
    console.log(err)
    res.status(500).send()
  }
})

app.listen(SERVER_PORT, () => {
  console.log('Server running at http://localhost:8082')
})
