"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const connection_1 = require("../infra/db/prisma/connection");
class BaseRepository {
    constructor() {
        this.connection = connection_1.DbConnection.getInstance();
    }
    raw(query, ...params) {
        return this.connection.$queryRawUnsafe(query, ...params);
    }
}
exports.BaseRepository = BaseRepository;
