import { DbConnection } from "../infra/db/prisma/connection";

export class BaseRepository {
  protected readonly connection = DbConnection.getInstance()

  public raw<T>(query: string, ...params: any[]): Promise<T> {
    return this.connection.$queryRawUnsafe<T>(query, ...params)
  }
}
