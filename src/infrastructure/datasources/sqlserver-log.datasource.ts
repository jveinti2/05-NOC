import { LogDatasource } from '../../domain/datasources/log.datasource'
import { LogSeverityLevel, LogEntity } from '../../domain/entities/log.entity'
import { SqlServerDatabase } from '../../data/sqlserver/init'

export class SqlserverLogDataSource implements LogDatasource {
  async getSsp(SSP: string): Promise<any> {
    const result = await SqlServerDatabase.sspExecute(SSP)
    console.log(result)
    return result
  }
  getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    throw new Error('Method not implemented.')
  }
  saveLog(log: LogEntity): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
