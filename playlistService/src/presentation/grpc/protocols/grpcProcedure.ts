import { ServerErrorResponse } from "@grpc/grpc-js";

export interface GrpcProcedure<Params = any, Response = any> {
  execute: (params: Params) => Promise<[ServerErrorResponse | null, Response | null]>
}
