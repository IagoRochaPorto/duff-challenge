import axios from 'axios'
import { Playlist } from '../models/playlist'
import { NotFoundError } from '../shared/errors'

type PlaylistMetaData = {
  name: string,
  tracks: { href: string }
}

type GetPlaylistMetaDataResponse = {
  playlists: {
    items: PlaylistMetaData[]
  }
}

type GetSinglePlaylistResponse = {
  href: string,
  items: [{
    track: {
      href: string
      name: string
      artists: Array<{
        name: string
      }>
    }
  }]
}

type AccessToken = {
  access_token: string
  token_type: string
  expires_in: number
}

export class PlaylistGateway {
  private headers: { Authorization: string }
  private tokenTimeout: number

  constructor(private readonly clientId: string, private readonly clientSecret: string) {
    this.headers = { Authorization: '' }
    this.tokenTimeout = 0;

  }

  async getPlaylistBySearchValue(searchValue: string): Promise<Playlist> {
    await this.updateAccessToken()
    const playlist = await this.getPlaylistMetaDataFromSearchValue(searchValue)
    const tracks = await this.getPlaylistData(playlist.tracks.href)
    return {
      name: playlist.name,
      tracks: tracks.items.map(track => ({
        name: track.track.name,
        link: track.track.href,
        artist: track.track.artists[0].name,
      }))
    }
  }

  private async updateAccessToken(): Promise<void> {
    if (!this.tokenTimeout || this.tokenTimeout < Date.now()) {

      const path = 'https://accounts.spotify.com/api/token'
      const data = `grant_type=client_credentials`
      const encodedPayload = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64");
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${encodedPayload}`
      }
      const response = await axios.post<AccessToken>(path, data, { headers })

      if (!response.data) {
        throw new NotFoundError('No valid token found')
      }

      const currentDateInSec = Date.now() / 1000

      this.tokenTimeout = currentDateInSec + response.data.expires_in
      this.headers = { Authorization: `${response.data.token_type} ${response.data.access_token}` }
    }
  }


  private async getPlaylistData(href: string): Promise<GetSinglePlaylistResponse> {
    const response = await axios.get<GetSinglePlaylistResponse>(href, { headers: this.headers })

    if (!response.data) {
      throw new NotFoundError('No data found')
    }

    return response.data
  }

  private async getPlaylistMetaDataFromSearchValue(q: string): Promise<PlaylistMetaData> {
    const response = await axios.get<GetPlaylistMetaDataResponse>(
      "https://api.spotify.com/v1/search",
      {
        headers: this.headers,
        params: { q, type: 'playlist', limit: 1 }
      }
    )

    if (!response.data) {
      throw new NotFoundError('No data found')
    }

    const firstPlaylist = response.data.playlists.items[0]
    return firstPlaylist
  }
}
