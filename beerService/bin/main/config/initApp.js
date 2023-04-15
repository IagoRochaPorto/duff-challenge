"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApp = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const beerServiceFactory_1 = require("../factories/services/grpc/beerServiceFactory");
function initApp() {
    const app = new grpc_js_1.Server();
    (0, beerServiceFactory_1.makeBeerService)(app);
    const host = `${process.env.SERVER_HOST || 'localhost'}:${process.env.SERVER_PORT || '8080'}`;
    app.bindAsync(host, grpc_js_1.ServerCredentials.createInsecure(), () => {
        app.start();
        console.log("Server running at http://localhost:8080");
    });
}
exports.initApp = initApp;
