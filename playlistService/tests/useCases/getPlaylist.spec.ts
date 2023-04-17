import { GetBeerByTemperatureAvgGateway } from "../../src/gateways/getBeerByTemperatureAvgGateway"
import { GetPlaylistBySearchValueGateway } from "../../src/gateways/getPlaylistBySearchValueGateway"
import { GetPlaylistByBeerTemperature } from "../../src/useCases/getPlaylist"
import { makeFakeBeer, makeFakePlaylist } from "../fakes"

function makeSut() {
  const getBeerGateway: GetBeerByTemperatureAvgGateway = {
    getBeerByTemperatureAvg: jest.fn()
  }
  const playlistGateway: GetPlaylistBySearchValueGateway = {
    getPlaylistBySearchValue: jest.fn()
  }
  jest.spyOn(getBeerGateway, 'getBeerByTemperatureAvg').mockReturnValue(Promise.resolve(makeFakeBeer()))
  const sut = new GetPlaylistByBeerTemperature(getBeerGateway, playlistGateway)

  return {
    sut,
    getBeerGateway,
    playlistGateway
  }
}

describe('getPlaylist use case', () => {
  it('Should call getBeerGateway with correct params', async () => {
    const { sut, getBeerGateway } = makeSut()
    const getBeerByTemperatureAvgSpy = jest.spyOn(getBeerGateway, 'getBeerByTemperatureAvg')
    await sut.execute({ temperature: 10 })
    expect(getBeerByTemperatureAvgSpy).toHaveBeenCalledWith({ temperature: 10 })
  })

  it('Should call playlistGateway with correct params', async () => {
    const { sut, playlistGateway } = makeSut()
    const getPlaylistBySearchValueSpy = jest.spyOn(playlistGateway, 'getPlaylistBySearchValue')
    await sut.execute({ temperature: 10 })
    expect(getPlaylistBySearchValueSpy).toHaveBeenCalledWith({ searchValue: 'any_type beer' })
  })

  it('Should return a playlist', async () => {
    const { sut, playlistGateway } = makeSut()
    jest.spyOn(playlistGateway, 'getPlaylistBySearchValue').mockReturnValue(Promise.resolve(makeFakePlaylist()))
    const playlist = await sut.execute({ temperature: 10 })
    expect(playlist).toEqual({
      beerStyle: makeFakeBeer().type,
      playlist: makeFakePlaylist()
    })
  })

  it('Should throw if getBeerGateway throws', async () => {
    const { sut, getBeerGateway } = makeSut()
    jest.spyOn(getBeerGateway, 'getBeerByTemperatureAvg').mockImplementationOnce(() => { throw new Error('any_error') })
    const promise = sut.execute({ temperature: 10 })
    await expect(promise).rejects.toThrow(new Error('any_error'))
  })
})
