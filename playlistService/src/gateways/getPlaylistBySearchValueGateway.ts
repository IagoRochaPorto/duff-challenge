import { Playlist } from "../models/playlist"

export interface GetPlaylistBySearchValueGateway {
  getPlaylistBySearchValue(params: GetPlaylistBySearchValueGateway.Params): Promise<GetPlaylistBySearchValueGateway.Response>
}

export namespace GetPlaylistBySearchValueGateway {
  export type Params = {
    searchValue: string
  }

  export type Response = Playlist
}