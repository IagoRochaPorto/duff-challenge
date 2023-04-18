import { NotFoundError } from "../../../src/shared/errors"

describe('NotFound exists error', () => {
  it('Should return a new instance of NotFoundError', () => {
    const error = new NotFoundError('Any')
    expect(error.message).toEqual('Any')
    expect(error.name).toEqual('NotFoundError')
  })
})