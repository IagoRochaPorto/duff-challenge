"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDatabase = void 0;
const connection_1 = require("../../infra/db/prisma/connection");
function initDatabase() {
    connection_1.DbConnection.init();
}
exports.initDatabase = initDatabase;
