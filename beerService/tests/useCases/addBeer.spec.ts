import { AddBeerRepository } from "../../src/repositories/beer"
import { AddBeer } from "../../src/usecases"
import { makeFakeBeer } from '../fakes'

function makeSut() {
  const addBeerRepositoryStub: AddBeerRepository = { addBeer: jest.fn() }
  const sut = new AddBeer(addBeerRepositoryStub)
  return {
    sut,
    addBeerRepositoryStub
  }
}

describe('Add beer use case', () => {
  it('Should call addBeerRepository with correct values', async () => {
    const { sut, addBeerRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addBeerRepositoryStub, 'addBeer')
    await sut.execute(makeFakeBeer())
    expect(addSpy).toHaveBeenCalledWith(makeFakeBeer())
  })

  it('Should return a beer on success', async () => {
    const { sut, addBeerRepositoryStub } = makeSut()
    jest.spyOn(addBeerRepositoryStub, 'addBeer').mockReturnValueOnce(Promise.resolve(makeFakeBeer()))
    const beer = await sut.execute(makeFakeBeer())
    expect(beer).toEqual(makeFakeBeer())
  })

  it('Should throw if addBeerRepository throws', async () => {
    const { sut, addBeerRepositoryStub } = makeSut()
    jest.spyOn(addBeerRepositoryStub, 'addBeer').mockImplementationOnce(() => { throw new Error('Any') })
    const promise = sut.execute(makeFakeBeer())
    await expect(promise).rejects.toThrow(new Error('Any'))
  })
})
