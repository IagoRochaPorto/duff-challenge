import { ServerErrorResponse } from "@grpc/grpc-js"
import { UseCase } from "../../shared/types/useCase"
import { Status } from "@grpc/grpc-js/build/src/constants"
import { AlreadyExistsError, NotFoundError } from "../../shared/errors"

export class GrpcUseCaseAdapter<Params, Response> {
  constructor(private readonly useCase: UseCase<Params, Response>) { }

  async execute(params: Params): Promise<[ServerErrorResponse | null, Response | null]> {
    try {
      const response = await this.useCase.execute(params)
      return [null, response]
    } catch (error) {
      console.error(error)
      const parsedError = this.identifyError(error)
      return [parsedError, null]
    }
  }

  identifyError(error: unknown): ServerErrorResponse {
    if (error instanceof NotFoundError) {
      return {
        code: Status.NOT_FOUND,
        message: error.message,
        name: 'NotFoundError'
      }
    }

    if (error instanceof AlreadyExistsError) {
      return {
        code: Status.ALREADY_EXISTS,
        message: error.message,
        name: 'AlreadyExistsError'
      }
    }

    return {
      code: Status.INTERNAL,
      message: 'Internal error',
      name: 'InternalError'
    }
  }
}