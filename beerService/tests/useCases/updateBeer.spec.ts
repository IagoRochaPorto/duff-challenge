import { UpdateBeerRepository } from "../../src/repositories/beer"
import { UpdateBeer } from "../../src/usecases"
import { makeFakeBeer } from "../fakes"

function makeSut() {
  const updateBeerRepositoryStub: UpdateBeerRepository = { updateBeer: jest.fn() }
  const sut = new UpdateBeer(updateBeerRepositoryStub)
  return {
    sut,
    updateBeerRepositoryStub
  }
}

describe('Update beer use case', () => {
  it('Should call updateBeerRepository with correct values', async () => {
    const { sut, updateBeerRepositoryStub } = makeSut()
    const updateSpy = jest.spyOn(updateBeerRepositoryStub, 'updateBeer')
    const { id, ...data } = makeFakeBeer()
    await sut.execute({ id, data })
    expect(updateSpy).toHaveBeenCalledWith({
      id, data
    })
  })
})