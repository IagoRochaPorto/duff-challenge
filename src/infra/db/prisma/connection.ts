import { PrismaClient } from "@prisma/client";

export class DbConnection {
  private static instance: PrismaClient;
  private constructor() { }

  static init(): void {
    if (!DbConnection.instance) {
      DbConnection.instance = new PrismaClient();
    }
  }

  static getInstance(): PrismaClient {
    if (!DbConnection.instance) {
      DbConnection.instance = new PrismaClient();
    }
    return DbConnection.instance;
  }

}