"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const initDatabase_1 = require("./config/initDatabase");
const initApp_1 = require("./config/initApp");
try {
    (0, initDatabase_1.initDatabase)();
    (0, initApp_1.initApp)();
}
catch (error) {
    console.log(error);
}
