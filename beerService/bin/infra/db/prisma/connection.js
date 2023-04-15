"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnection = void 0;
const client_1 = require("@prisma/client");
class DbConnection {
    constructor() { }
    static init() {
        if (!DbConnection.instance) {
            DbConnection.instance = new client_1.PrismaClient();
        }
    }
    static getInstance() {
        if (!DbConnection.instance) {
            DbConnection.instance = new client_1.PrismaClient();
        }
        return DbConnection.instance;
    }
}
exports.DbConnection = DbConnection;
