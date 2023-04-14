import { DbConnection } from "../../infra/db/prisma/connection";

export function initDatabase(): void {
  DbConnection.init()
}
