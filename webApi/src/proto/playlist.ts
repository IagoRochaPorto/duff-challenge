/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "playlistApi";

export interface GetPlayListByTemperatureRequest {
  temperature: number;
}

export interface Track {
  name: string;
  artist: string;
  link: string;
}

export interface Playlist {
  name: string;
  tracks: Track[];
}

export interface GetPlayListByTemperatureResponse {
  beerStyle: string;
  playlist: Playlist | undefined;
}

function createBaseGetPlayListByTemperatureRequest(): GetPlayListByTemperatureRequest {
  return { temperature: 0 };
}

export const GetPlayListByTemperatureRequest = {
  encode(message: GetPlayListByTemperatureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.temperature !== 0) {
      writer.uint32(8).int32(message.temperature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPlayListByTemperatureRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPlayListByTemperatureRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.temperature = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPlayListByTemperatureRequest {
    return { temperature: isSet(object.temperature) ? Number(object.temperature) : 0 };
  },

  toJSON(message: GetPlayListByTemperatureRequest): unknown {
    const obj: any = {};
    message.temperature !== undefined && (obj.temperature = Math.round(message.temperature));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPlayListByTemperatureRequest>, I>>(base?: I): GetPlayListByTemperatureRequest {
    return GetPlayListByTemperatureRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPlayListByTemperatureRequest>, I>>(
    object: I,
  ): GetPlayListByTemperatureRequest {
    const message = createBaseGetPlayListByTemperatureRequest();
    message.temperature = object.temperature ?? 0;
    return message;
  },
};

function createBaseTrack(): Track {
  return { name: "", artist: "", link: "" };
}

export const Track = {
  encode(message: Track, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.artist !== "") {
      writer.uint32(18).string(message.artist);
    }
    if (message.link !== "") {
      writer.uint32(26).string(message.link);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Track {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrack();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.artist = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.link = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Track {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      artist: isSet(object.artist) ? String(object.artist) : "",
      link: isSet(object.link) ? String(object.link) : "",
    };
  },

  toJSON(message: Track): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.artist !== undefined && (obj.artist = message.artist);
    message.link !== undefined && (obj.link = message.link);
    return obj;
  },

  create<I extends Exact<DeepPartial<Track>, I>>(base?: I): Track {
    return Track.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Track>, I>>(object: I): Track {
    const message = createBaseTrack();
    message.name = object.name ?? "";
    message.artist = object.artist ?? "";
    message.link = object.link ?? "";
    return message;
  },
};

function createBasePlaylist(): Playlist {
  return { name: "", tracks: [] };
}

export const Playlist = {
  encode(message: Playlist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.tracks) {
      Track.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Playlist {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaylist();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.tracks.push(Track.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Playlist {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      tracks: Array.isArray(object?.tracks) ? object.tracks.map((e: any) => Track.fromJSON(e)) : [],
    };
  },

  toJSON(message: Playlist): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.tracks) {
      obj.tracks = message.tracks.map((e) => e ? Track.toJSON(e) : undefined);
    } else {
      obj.tracks = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Playlist>, I>>(base?: I): Playlist {
    return Playlist.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Playlist>, I>>(object: I): Playlist {
    const message = createBasePlaylist();
    message.name = object.name ?? "";
    message.tracks = object.tracks?.map((e) => Track.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetPlayListByTemperatureResponse(): GetPlayListByTemperatureResponse {
  return { beerStyle: "", playlist: undefined };
}

export const GetPlayListByTemperatureResponse = {
  encode(message: GetPlayListByTemperatureResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.beerStyle !== "") {
      writer.uint32(10).string(message.beerStyle);
    }
    if (message.playlist !== undefined) {
      Playlist.encode(message.playlist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetPlayListByTemperatureResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetPlayListByTemperatureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.beerStyle = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.playlist = Playlist.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetPlayListByTemperatureResponse {
    return {
      beerStyle: isSet(object.beerStyle) ? String(object.beerStyle) : "",
      playlist: isSet(object.playlist) ? Playlist.fromJSON(object.playlist) : undefined,
    };
  },

  toJSON(message: GetPlayListByTemperatureResponse): unknown {
    const obj: any = {};
    message.beerStyle !== undefined && (obj.beerStyle = message.beerStyle);
    message.playlist !== undefined && (obj.playlist = message.playlist ? Playlist.toJSON(message.playlist) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetPlayListByTemperatureResponse>, I>>(
    base?: I,
  ): GetPlayListByTemperatureResponse {
    return GetPlayListByTemperatureResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetPlayListByTemperatureResponse>, I>>(
    object: I,
  ): GetPlayListByTemperatureResponse {
    const message = createBaseGetPlayListByTemperatureResponse();
    message.beerStyle = object.beerStyle ?? "";
    message.playlist = (object.playlist !== undefined && object.playlist !== null)
      ? Playlist.fromPartial(object.playlist)
      : undefined;
    return message;
  },
};

export type PlaylistServiceService = typeof PlaylistServiceService;
export const PlaylistServiceService = {
  getPlayListByTemperature: {
    path: "/playlistApi.PlaylistService/GetPlayListByTemperature",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetPlayListByTemperatureRequest) =>
      Buffer.from(GetPlayListByTemperatureRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetPlayListByTemperatureRequest.decode(value),
    responseSerialize: (value: GetPlayListByTemperatureResponse) =>
      Buffer.from(GetPlayListByTemperatureResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetPlayListByTemperatureResponse.decode(value),
  },
} as const;

export interface PlaylistServiceServer extends UntypedServiceImplementation {
  getPlayListByTemperature: handleUnaryCall<GetPlayListByTemperatureRequest, GetPlayListByTemperatureResponse>;
}

export interface PlaylistServiceClient extends Client {
  getPlayListByTemperature(
    request: GetPlayListByTemperatureRequest,
    callback: (error: ServiceError | null, response: GetPlayListByTemperatureResponse) => void,
  ): ClientUnaryCall;
  getPlayListByTemperature(
    request: GetPlayListByTemperatureRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetPlayListByTemperatureResponse) => void,
  ): ClientUnaryCall;
  getPlayListByTemperature(
    request: GetPlayListByTemperatureRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetPlayListByTemperatureResponse) => void,
  ): ClientUnaryCall;
}

export const PlaylistServiceClient = makeGenericClientConstructor(
  PlaylistServiceService,
  "playlistApi.PlaylistService",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): PlaylistServiceClient;
  service: typeof PlaylistServiceService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
