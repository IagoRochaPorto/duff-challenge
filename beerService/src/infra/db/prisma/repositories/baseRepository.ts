import { RawSqlRepository } from "../../../../repositories/rawSqlRepository";
import { DbConnection } from "../connection";

export class BaseRepository implements RawSqlRepository {
  protected readonly connection = DbConnection.getInstance()

  public raw<T>(query: string, ...params: any[]): Promise<T> {
    return this.connection.$queryRawUnsafe<T>(query, ...params)
  }
}
