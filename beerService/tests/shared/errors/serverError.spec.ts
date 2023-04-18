import { ServerError } from "../../../src/shared/errors"

describe('ServerError', () => {
  it('Should return a new instance of ServerError', () => {
    const error = new ServerError('Any')
    expect(error.message).toEqual('Any')
    expect(error.name).toEqual('ServerError')
  })
})