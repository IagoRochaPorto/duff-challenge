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

export const protobufPackage = "beerApi";

export interface Beer {
  id: number;
  type: string;
  minTemperature: number;
  maxTemperature: number;
}

export interface AddBeerRequest {
  type: string;
  minTemperature: number;
  maxTemperature: number;
}

export interface GetBeerRequest {
  type: string;
}

export interface Empty {
}

export interface GetBeerByTypeRequest {
  type: string;
}

export interface GetAllBeersResponse {
  beers: Beer[];
}

export interface GetBeerByCloserAverageTemperatureRequest {
  temperature: number;
}

function createBaseBeer(): Beer {
  return { id: 0, type: "", minTemperature: 0, maxTemperature: 0 };
}

export const Beer = {
  encode(message: Beer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.minTemperature !== 0) {
      writer.uint32(24).int32(message.minTemperature);
    }
    if (message.maxTemperature !== 0) {
      writer.uint32(32).int32(message.maxTemperature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Beer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBeer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.minTemperature = reader.int32();
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.maxTemperature = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Beer {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      minTemperature: isSet(object.minTemperature) ? Number(object.minTemperature) : 0,
      maxTemperature: isSet(object.maxTemperature) ? Number(object.maxTemperature) : 0,
    };
  },

  toJSON(message: Beer): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.type !== undefined && (obj.type = message.type);
    message.minTemperature !== undefined && (obj.minTemperature = Math.round(message.minTemperature));
    message.maxTemperature !== undefined && (obj.maxTemperature = Math.round(message.maxTemperature));
    return obj;
  },

  create<I extends Exact<DeepPartial<Beer>, I>>(base?: I): Beer {
    return Beer.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Beer>, I>>(object: I): Beer {
    const message = createBaseBeer();
    message.id = object.id ?? 0;
    message.type = object.type ?? "";
    message.minTemperature = object.minTemperature ?? 0;
    message.maxTemperature = object.maxTemperature ?? 0;
    return message;
  },
};

function createBaseAddBeerRequest(): AddBeerRequest {
  return { type: "", minTemperature: 0, maxTemperature: 0 };
}

export const AddBeerRequest = {
  encode(message: AddBeerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.minTemperature !== 0) {
      writer.uint32(16).int32(message.minTemperature);
    }
    if (message.maxTemperature !== 0) {
      writer.uint32(24).int32(message.maxTemperature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddBeerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddBeerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.minTemperature = reader.int32();
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.maxTemperature = reader.int32();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AddBeerRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      minTemperature: isSet(object.minTemperature) ? Number(object.minTemperature) : 0,
      maxTemperature: isSet(object.maxTemperature) ? Number(object.maxTemperature) : 0,
    };
  },

  toJSON(message: AddBeerRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.minTemperature !== undefined && (obj.minTemperature = Math.round(message.minTemperature));
    message.maxTemperature !== undefined && (obj.maxTemperature = Math.round(message.maxTemperature));
    return obj;
  },

  create<I extends Exact<DeepPartial<AddBeerRequest>, I>>(base?: I): AddBeerRequest {
    return AddBeerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<AddBeerRequest>, I>>(object: I): AddBeerRequest {
    const message = createBaseAddBeerRequest();
    message.type = object.type ?? "";
    message.minTemperature = object.minTemperature ?? 0;
    message.maxTemperature = object.maxTemperature ?? 0;
    return message;
  },
};

function createBaseGetBeerRequest(): GetBeerRequest {
  return { type: "" };
}

export const GetBeerRequest = {
  encode(message: GetBeerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBeerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBeerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBeerRequest {
    return { type: isSet(object.type) ? String(object.type) : "" };
  },

  toJSON(message: GetBeerRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBeerRequest>, I>>(base?: I): GetBeerRequest {
    return GetBeerRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBeerRequest>, I>>(object: I): GetBeerRequest {
    const message = createBaseGetBeerRequest();
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): Empty {
    return {};
  },

  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
    return Empty.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
    const message = createBaseEmpty();
    return message;
  },
};

function createBaseGetBeerByTypeRequest(): GetBeerByTypeRequest {
  return { type: "" };
}

export const GetBeerByTypeRequest = {
  encode(message: GetBeerByTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBeerByTypeRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBeerByTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBeerByTypeRequest {
    return { type: isSet(object.type) ? String(object.type) : "" };
  },

  toJSON(message: GetBeerByTypeRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBeerByTypeRequest>, I>>(base?: I): GetBeerByTypeRequest {
    return GetBeerByTypeRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBeerByTypeRequest>, I>>(object: I): GetBeerByTypeRequest {
    const message = createBaseGetBeerByTypeRequest();
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseGetAllBeersResponse(): GetAllBeersResponse {
  return { beers: [] };
}

export const GetAllBeersResponse = {
  encode(message: GetAllBeersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.beers) {
      Beer.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAllBeersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAllBeersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.beers.push(Beer.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAllBeersResponse {
    return { beers: Array.isArray(object?.beers) ? object.beers.map((e: any) => Beer.fromJSON(e)) : [] };
  },

  toJSON(message: GetAllBeersResponse): unknown {
    const obj: any = {};
    if (message.beers) {
      obj.beers = message.beers.map((e) => e ? Beer.toJSON(e) : undefined);
    } else {
      obj.beers = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAllBeersResponse>, I>>(base?: I): GetAllBeersResponse {
    return GetAllBeersResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetAllBeersResponse>, I>>(object: I): GetAllBeersResponse {
    const message = createBaseGetAllBeersResponse();
    message.beers = object.beers?.map((e) => Beer.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetBeerByCloserAverageTemperatureRequest(): GetBeerByCloserAverageTemperatureRequest {
  return { temperature: 0 };
}

export const GetBeerByCloserAverageTemperatureRequest = {
  encode(message: GetBeerByCloserAverageTemperatureRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.temperature !== 0) {
      writer.uint32(8).int32(message.temperature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBeerByCloserAverageTemperatureRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBeerByCloserAverageTemperatureRequest();
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

  fromJSON(object: any): GetBeerByCloserAverageTemperatureRequest {
    return { temperature: isSet(object.temperature) ? Number(object.temperature) : 0 };
  },

  toJSON(message: GetBeerByCloserAverageTemperatureRequest): unknown {
    const obj: any = {};
    message.temperature !== undefined && (obj.temperature = Math.round(message.temperature));
    return obj;
  },

  create<I extends Exact<DeepPartial<GetBeerByCloserAverageTemperatureRequest>, I>>(
    base?: I,
  ): GetBeerByCloserAverageTemperatureRequest {
    return GetBeerByCloserAverageTemperatureRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GetBeerByCloserAverageTemperatureRequest>, I>>(
    object: I,
  ): GetBeerByCloserAverageTemperatureRequest {
    const message = createBaseGetBeerByCloserAverageTemperatureRequest();
    message.temperature = object.temperature ?? 0;
    return message;
  },
};

export type BeerServiceService = typeof BeerServiceService;
export const BeerServiceService = {
  addBeer: {
    path: "/beerApi.BeerService/AddBeer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: AddBeerRequest) => Buffer.from(AddBeerRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => AddBeerRequest.decode(value),
    responseSerialize: (value: Beer) => Buffer.from(Beer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Beer.decode(value),
  },
  getAllBeers: {
    path: "/beerApi.BeerService/GetAllBeers",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: GetAllBeersResponse) => Buffer.from(GetAllBeersResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetAllBeersResponse.decode(value),
  },
  getBeerByType: {
    path: "/beerApi.BeerService/GetBeerByType",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBeerByTypeRequest) => Buffer.from(GetBeerByTypeRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBeerByTypeRequest.decode(value),
    responseSerialize: (value: Beer) => Buffer.from(Beer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Beer.decode(value),
  },
  updateBeer: {
    path: "/beerApi.BeerService/UpdateBeer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Beer) => Buffer.from(Beer.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Beer.decode(value),
    responseSerialize: (value: Beer) => Buffer.from(Beer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Beer.decode(value),
  },
  deleteBeer: {
    path: "/beerApi.BeerService/DeleteBeer",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Beer) => Buffer.from(Beer.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Beer.decode(value),
    responseSerialize: (value: Beer) => Buffer.from(Beer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Beer.decode(value),
  },
  getBeerByCloserAverageTemperature: {
    path: "/beerApi.BeerService/GetBeerByCloserAverageTemperature",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetBeerByCloserAverageTemperatureRequest) =>
      Buffer.from(GetBeerByCloserAverageTemperatureRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetBeerByCloserAverageTemperatureRequest.decode(value),
    responseSerialize: (value: Beer) => Buffer.from(Beer.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Beer.decode(value),
  },
} as const;

export interface BeerServiceServer extends UntypedServiceImplementation {
  addBeer: handleUnaryCall<AddBeerRequest, Beer>;
  getAllBeers: handleUnaryCall<Empty, GetAllBeersResponse>;
  getBeerByType: handleUnaryCall<GetBeerByTypeRequest, Beer>;
  updateBeer: handleUnaryCall<Beer, Beer>;
  deleteBeer: handleUnaryCall<Beer, Beer>;
  getBeerByCloserAverageTemperature: handleUnaryCall<GetBeerByCloserAverageTemperatureRequest, Beer>;
}

export interface BeerServiceClient extends Client {
  addBeer(request: AddBeerRequest, callback: (error: ServiceError | null, response: Beer) => void): ClientUnaryCall;
  addBeer(
    request: AddBeerRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  addBeer(
    request: AddBeerRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  getAllBeers(
    request: Empty,
    callback: (error: ServiceError | null, response: GetAllBeersResponse) => void,
  ): ClientUnaryCall;
  getAllBeers(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetAllBeersResponse) => void,
  ): ClientUnaryCall;
  getAllBeers(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetAllBeersResponse) => void,
  ): ClientUnaryCall;
  getBeerByType(
    request: GetBeerByTypeRequest,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  getBeerByType(
    request: GetBeerByTypeRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  getBeerByType(
    request: GetBeerByTypeRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  updateBeer(request: Beer, callback: (error: ServiceError | null, response: Beer) => void): ClientUnaryCall;
  updateBeer(
    request: Beer,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  updateBeer(
    request: Beer,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  deleteBeer(request: Beer, callback: (error: ServiceError | null, response: Beer) => void): ClientUnaryCall;
  deleteBeer(
    request: Beer,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  deleteBeer(
    request: Beer,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  getBeerByCloserAverageTemperature(
    request: GetBeerByCloserAverageTemperatureRequest,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  getBeerByCloserAverageTemperature(
    request: GetBeerByCloserAverageTemperatureRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
  getBeerByCloserAverageTemperature(
    request: GetBeerByCloserAverageTemperatureRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Beer) => void,
  ): ClientUnaryCall;
}

export const BeerServiceClient = makeGenericClientConstructor(BeerServiceService, "beerApi.BeerService") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BeerServiceClient;
  service: typeof BeerServiceService;
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
