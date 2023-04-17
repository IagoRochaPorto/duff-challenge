import { Playlist } from "../../src/models/playlist";

export function makeFakePlaylist(): Playlist {
  return {
    name: "any_name",
    tracks: [{
      artist: "any_artist",
      link: "any_link",
      name: "any_track_name",
    }]
  }
}