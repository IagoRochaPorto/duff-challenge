import { DbConnection } from "../infra/db/prisma/connection";

export class BaseRepository {
  protected readonly connection = DbConnection.getInstance()


  public raw<T>(query: string, ...params: any[]) {
    return this.connection.$queryRawUnsafe<T>(query, ...params)
  }
}
