import { GetBeerRepository } from "../../src/repositories/beer"
import { GetBeers } from "../../src/usecases"
import { makeFakeBeer } from "../fakes"

function makeSut() {
  const addBeerRepositoryStub: GetBeerRepository = { getBeers: jest.fn() }
  const sut = new GetBeers(addBeerRepositoryStub)
  return {
    sut,
    addBeerRepositoryStub
  }
}


describe('Get beers use case', () => {
  it('Should call getBeersRepository correctly', async () => {
    const { sut, addBeerRepositoryStub } = makeSut()
    const getSpy = jest.spyOn(addBeerRepositoryStub, 'getBeers')
    await sut.execute()
    expect(getSpy).toHaveBeenCalledWith({
      where: undefined
    })
  })

  it('Should call getBeersRepository with correct values', async () => {
    const { sut, addBeerRepositoryStub } = makeSut()
    const getSpy = jest.spyOn(addBeerRepositoryStub, 'getBeers')
    await sut.execute({ id: 1 })
    expect(getSpy).toHaveBeenCalledWith({
      where: { id: 1 }
    })
  })

  it('Should return beers on success', async () => {
    const { sut, addBeerRepositoryStub } = makeSut()
    jest.spyOn(addBeerRepositoryStub, 'getBeers').mockReturnValueOnce(Promise.resolve([makeFakeBeer()]))
    const beers = await sut.execute()
    expect(beers).toEqual([makeFakeBeer()])
  })

  it('Should throw if getBeersRepository throws', async () => {
    const { sut, addBeerRepositoryStub } = makeSut()
    jest.spyOn(addBeerRepositoryStub, 'getBeers').mockImplementationOnce(() => { throw new Error('Any') })
    const promise = sut.execute()
    await expect(promise).rejects.toThrow(new Error('Any'))
  })
})