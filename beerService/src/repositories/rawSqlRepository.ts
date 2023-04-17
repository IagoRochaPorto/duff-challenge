export interface RawSqlRepository {
  raw<T>(query: string, ...params: any[]): Promise<T>
}
