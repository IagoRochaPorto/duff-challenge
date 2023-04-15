"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeerRepository = void 0;
const client_1 = require("@prisma/client");
const connection_1 = require("../infra/db/prisma/connection");
const alreadyExistsError_1 = require("../shared/errors/alreadyExistsError");
const errors_1 = require("../shared/errors");
const baseRepository_1 = require("./baseRepository");
class BeerRepository extends baseRepository_1.BaseRepository {
    add(beer) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = connection_1.DbConnection.getInstance();
            try {
                const createdBeer = yield connection.beer.create({
                    data: {
                        type: beer.type,
                        maxTemperature: beer.maxTemperature,
                        minTemperature: beer.minTemperature,
                    }
                });
                return createdBeer;
            }
            catch (error) {
                if (error instanceof client_1.Prisma.PrismaClientKnownRequestError && error.code == 'P2002') {
                    throw new alreadyExistsError_1.AlreadyExistsError('Beer already exists');
                }
                throw new errors_1.ServerError('Internal server error');
            }
        });
    }
    getAll(filter = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = connection_1.DbConnection.getInstance();
            const beers = yield connection.beer.findMany({ where: Object.assign({}, filter) });
            return beers;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = connection_1.DbConnection.getInstance();
            const deletedBeer = yield connection.beer.delete({ where: { id } });
            return deletedBeer;
        });
    }
    update(id, beer) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = connection_1.DbConnection.getInstance();
            const updatedBeer = yield connection.beer.update({
                where: { id },
                data: {
                    type: beer.type,
                    maxTemperature: beer.maxTemperature,
                    minTemperature: beer.minTemperature,
                }
            });
            return updatedBeer;
        });
    }
}
exports.BeerRepository = BeerRepository;
