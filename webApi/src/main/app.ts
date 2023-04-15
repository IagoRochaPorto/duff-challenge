import Express from 'express'
import { BeerServiceClient } from '../../proto/beer'
import { PlaylistServiceClient } from '../../proto/playlist'
import { credentials } from '@grpc/grpc-js'
import { config } from 'dotenv'

config()

const app = Express()
const {
  BEER_SERVICE_HOST,
  PLAYLIST_SERVICE_HOST,
  SERVER_PORT
} = process.env
const beerClient = new BeerServiceClient(`${BEER_SERVICE_HOST}`, credentials.createInsecure())
const playlistClient = new PlaylistServiceClient(`${PLAYLIST_SERVICE_HOST}`, credentials.createInsecure())

app.use(Express.json())

app.get('/beer', (req, res) => {
  beerClient.getAllBeers({}, (err, response) => {
    if (err) throw (err)
    res.send(response.beers)
  })
})

app.get('/beer/:type', (req, res) => {
  beerClient.getBeerByType({ type: req.params.type }, (err, response) => {
    if (err) throw (err)
    res.send(response)
  })
})

app.post('/beer', (req, res) => {
  beerClient.addBeer({
    maxTemperature: req.body.maxTemperature,
    minTemperature: req.body.minTemperature,
    type: req.body.type
  }, (err, response) => {
    if (err) throw (err)
    res.send(response)
  })
})

app.put('/beer/:id', (req, res) => {
  beerClient.updateBeer({
    id: parseInt(req.params.id),
    maxTemperature: req.body.maxTemperature,
    minTemperature: req.body.minTemperature,
    type: req.body.type
  }, (err, response) => {
    if (err) throw (err)
    res.send(response)
  })
})

app.delete('/beer/:id', (req, res) => {
  beerClient.deleteBeer({ id: req.params.id }, (err, response) => {
    if (err) throw (err)
    res.send(response)
  })
})

app.get('/beer/:temperature/playlist', (req, res) => {
  playlistClient.getPlayListByTemperature({ temperature: parseInt(req.params.temperature) }, (err, response) => {
    if (err) throw (err)
    res.send(response)
  })
})

app.listen(SERVER_PORT, () => {
  console.log('Server running at http://localhost:8082')
})
