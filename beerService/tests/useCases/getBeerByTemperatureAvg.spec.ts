import { RawSqlRepository } from '../../src/repositories/rawSqlRepository'
import { GetBeerByTemperatureAvg } from '../../src/usecases'
import { makeFakeBeer } from '../fakes'

function makeSut() {
  const rawSqlStub: RawSqlRepository = { raw: jest.fn() }
  jest.spyOn(rawSqlStub, 'raw').mockReturnValue(Promise.resolve([]))
  const sut = new GetBeerByTemperatureAvg(rawSqlStub)
  return {
    sut,
    rawSqlStub
  }
}

describe('Get beer by temperature average use case', () => {
  it('Should call rawSql with correct values', async () => {
    const { sut, rawSqlStub } = makeSut()
    const rawSpy = jest.spyOn(rawSqlStub, 'raw')
    await sut.execute({
      temperature: -2
    })
    expect(rawSpy).toHaveBeenCalledWith(`
      SELECT *, ABS(?  - ((minTemperature + maxTemperature) / 2)) as averageTemperature 
      FROM Beer
      ORDER BY ABS(?  - ((minTemperature + maxTemperature) / 2));
    `, -2, - 2)
  })

  it('Should return a beer on success', async () => {
    const { sut, rawSqlStub } = makeSut()
    jest.spyOn(rawSqlStub, 'raw').mockReturnValueOnce(Promise.resolve([makeFakeBeer()]))
    const beer = await sut.execute({
      temperature: -2
    })
    expect(beer).toEqual(makeFakeBeer())
  })

  it('Should throw if rawSql throws', async () => {
    const { sut, rawSqlStub } = makeSut()
    jest.spyOn(rawSqlStub, 'raw').mockImplementationOnce(() => { throw new Error('Any') })
    const promise = sut.execute({
      temperature: -2
    })
    await expect(promise).rejects.toThrow(new Error('Any'))
  })
})
