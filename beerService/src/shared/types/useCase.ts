export interface UseCase<Params = any, Response = any> {
  execute(params: Params): Promise<Response>
}