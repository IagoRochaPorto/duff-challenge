import { GetPlayListByTemperatureRequest, GetPlayListByTemperatureResponse, PlaylistServiceServer } from "../../../../proto/playlist";
import { GrpcProcedure } from "../protocols/grpcProcedure";

export const PlaylistService = {
  getPlayListByTemperature(useCase: GrpcProcedure<GetPlayListByTemperatureRequest, GetPlayListByTemperatureResponse>): PlaylistServiceServer['getPlayListByTemperature'] {
    return async (call, callback) => {
      const [error, playlist] = await useCase.execute(call.request)
      callback(error, playlist)
    }
  }
}