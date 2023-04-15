"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerServiceClient = exports.BeerServiceService = exports.GetBeerByCloserAverageTemperatureRequest = exports.GetAllBeersResponse = exports.DeleteBeerRequest = exports.GetBeerByTypeRequest = exports.Empty = exports.GetBeerRequest = exports.AddBeerRequest = exports.Beer = exports.protobufPackage = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "beerApi";
function createBaseBeer() {
    return { id: 0, type: "", minTemperature: 0, maxTemperature: 0 };
}
exports.Beer = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? Number(object.id) : 0,
            type: isSet(object.type) ? String(object.type) : "",
            minTemperature: isSet(object.minTemperature) ? Number(object.minTemperature) : 0,
            maxTemperature: isSet(object.maxTemperature) ? Number(object.maxTemperature) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        message.type !== undefined && (obj.type = message.type);
        message.minTemperature !== undefined && (obj.minTemperature = Math.round(message.minTemperature));
        message.maxTemperature !== undefined && (obj.maxTemperature = Math.round(message.maxTemperature));
        return obj;
    },
    create(base) {
        return exports.Beer.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseBeer();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.minTemperature = (_c = object.minTemperature) !== null && _c !== void 0 ? _c : 0;
        message.maxTemperature = (_d = object.maxTemperature) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseAddBeerRequest() {
    return { type: "", minTemperature: 0, maxTemperature: 0 };
}
exports.AddBeerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            type: isSet(object.type) ? String(object.type) : "",
            minTemperature: isSet(object.minTemperature) ? Number(object.minTemperature) : 0,
            maxTemperature: isSet(object.maxTemperature) ? Number(object.maxTemperature) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.minTemperature !== undefined && (obj.minTemperature = Math.round(message.minTemperature));
        message.maxTemperature !== undefined && (obj.maxTemperature = Math.round(message.maxTemperature));
        return obj;
    },
    create(base) {
        return exports.AddBeerRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddBeerRequest();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.minTemperature = (_b = object.minTemperature) !== null && _b !== void 0 ? _b : 0;
        message.maxTemperature = (_c = object.maxTemperature) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseGetBeerRequest() {
    return { type: "" };
}
exports.GetBeerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return { type: isSet(object.type) ? String(object.type) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    create(base) {
        return exports.GetBeerRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBeerRequest();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseEmpty() {
    return {};
}
exports.Empty = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.Empty.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(_) {
        const message = createBaseEmpty();
        return message;
    },
};
function createBaseGetBeerByTypeRequest() {
    return { type: "" };
}
exports.GetBeerByTypeRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return { type: isSet(object.type) ? String(object.type) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        return obj;
    },
    create(base) {
        return exports.GetBeerByTypeRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBeerByTypeRequest();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteBeerRequest() {
    return { id: 0 };
}
exports.DeleteBeerRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).int32(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteBeerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 8) {
                        break;
                    }
                    message.id = reader.int32();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? Number(object.id) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = Math.round(message.id));
        return obj;
    },
    create(base) {
        return exports.DeleteBeerRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteBeerRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseGetAllBeersResponse() {
    return { beers: [] };
}
exports.GetAllBeersResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.beers) {
            exports.Beer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAllBeersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.beers.push(exports.Beer.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { beers: Array.isArray(object === null || object === void 0 ? void 0 : object.beers) ? object.beers.map((e) => exports.Beer.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.beers) {
            obj.beers = message.beers.map((e) => e ? exports.Beer.toJSON(e) : undefined);
        }
        else {
            obj.beers = [];
        }
        return obj;
    },
    create(base) {
        return exports.GetAllBeersResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAllBeersResponse();
        message.beers = ((_a = object.beers) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Beer.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetBeerByCloserAverageTemperatureRequest() {
    return { temperature: 0 };
}
exports.GetBeerByCloserAverageTemperatureRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.temperature !== 0) {
            writer.uint32(8).int32(message.temperature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return { temperature: isSet(object.temperature) ? Number(object.temperature) : 0 };
    },
    toJSON(message) {
        const obj = {};
        message.temperature !== undefined && (obj.temperature = Math.round(message.temperature));
        return obj;
    },
    create(base) {
        return exports.GetBeerByCloserAverageTemperatureRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetBeerByCloserAverageTemperatureRequest();
        message.temperature = (_a = object.temperature) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
exports.BeerServiceService = {
    addBeer: {
        path: "/beerApi.BeerService/AddBeer",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.AddBeerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.AddBeerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Beer.encode(value).finish()),
        responseDeserialize: (value) => exports.Beer.decode(value),
    },
    getAllBeers: {
        path: "/beerApi.BeerService/GetAllBeers",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.Empty.encode(value).finish()),
        requestDeserialize: (value) => exports.Empty.decode(value),
        responseSerialize: (value) => Buffer.from(exports.GetAllBeersResponse.encode(value).finish()),
        responseDeserialize: (value) => exports.GetAllBeersResponse.decode(value),
    },
    getBeerByType: {
        path: "/beerApi.BeerService/GetBeerByType",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBeerByTypeRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBeerByTypeRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Beer.encode(value).finish()),
        responseDeserialize: (value) => exports.Beer.decode(value),
    },
    updateBeer: {
        path: "/beerApi.BeerService/UpdateBeer",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.Beer.encode(value).finish()),
        requestDeserialize: (value) => exports.Beer.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Beer.encode(value).finish()),
        responseDeserialize: (value) => exports.Beer.decode(value),
    },
    deleteBeer: {
        path: "/beerApi.BeerService/DeleteBeer",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.DeleteBeerRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.DeleteBeerRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Beer.encode(value).finish()),
        responseDeserialize: (value) => exports.Beer.decode(value),
    },
    getBeerByCloserAverageTemperature: {
        path: "/beerApi.BeerService/GetBeerByCloserAverageTemperature",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(exports.GetBeerByCloserAverageTemperatureRequest.encode(value).finish()),
        requestDeserialize: (value) => exports.GetBeerByCloserAverageTemperatureRequest.decode(value),
        responseSerialize: (value) => Buffer.from(exports.Beer.encode(value).finish()),
        responseDeserialize: (value) => exports.Beer.decode(value),
    },
};
exports.BeerServiceClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.BeerServiceService, "beerApi.BeerService");
function isSet(value) {
    return value !== null && value !== undefined;
}
