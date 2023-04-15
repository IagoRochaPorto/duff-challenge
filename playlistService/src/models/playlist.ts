export interface Playlist {
  name: string
  tracks: Array<{
    name: string
    artist: string
    link: string
  }>
}
