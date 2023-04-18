import { AlreadyExistsError } from "../../../src/shared/errors"

describe('Already exists error', () => {
  it('Should return a new instance of AlreadyExistsError', () => {
    const error = new AlreadyExistsError('Any')
    expect(error.message).toEqual('Any')
    expect(error.name).toEqual('AlreadyExistsError')
  })
})