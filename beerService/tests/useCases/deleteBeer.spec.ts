import { DeleteBeerRepository } from "../../src/repositories/beer"
import { DeleteBeer } from "../../src/usecases"
import { makeFakeBeer } from "../fakes"

function makeSut() {
  const deleteBeerRepositoryStub: DeleteBeerRepository = { deleteBeer: jest.fn() }
  const sut = new DeleteBeer(deleteBeerRepositoryStub)
  return {
    sut,
    deleteBeerRepositoryStub
  }
}

describe('Delete beer use case', () => {
  it('Should call deleteBeerRepository with correct values', async () => {
    const { sut, deleteBeerRepositoryStub } = makeSut()
    const deleteSpy = jest.spyOn(deleteBeerRepositoryStub, 'deleteBeer')
    await sut.execute({
      id: 1
    })
    expect(deleteSpy).toHaveBeenCalledWith({ id: 1 })
  })

  it('Should return deleted beer on success', async () => {
    const { sut, deleteBeerRepositoryStub } = makeSut()
    jest.spyOn(deleteBeerRepositoryStub, 'deleteBeer').mockReturnValueOnce(Promise.resolve(makeFakeBeer()))
    const beer = await sut.execute({
      id: 1
    })
    expect(beer).toEqual(makeFakeBeer())
  })

  it('Should throw if deleteBeerRepository throws', async () => {
    const { sut, deleteBeerRepositoryStub } = makeSut()
    jest.spyOn(deleteBeerRepositoryStub, 'deleteBeer').mockImplementationOnce(() => { throw new Error('Any') })
    const promise = sut.execute({
      id: 1
    })
    await expect(promise).rejects.toThrow(new Error('Any'))
  })
})