import { CheckService } from '../domain/use-cases/checks/check-service'
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource'
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl'
import { cronService } from './cron/cron-service'

const fileSystemLogRepository = new LogRepositoryImpl(new FileSystemDatasource())

export class Server {
  public static start() {
    console.log('Server started')

    cronService.createJob('*/5 * * * * *', () => {
      const url = 'https://localhost:3000'
      new CheckService(
        fileSystemLogRepository,
        () => console.log(`Service ${url} is OK`),
        (error) => console.error(error)
      ).execute(url)
    })
  }
}
