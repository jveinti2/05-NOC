import { envs } from '../config/plugins/envs.plugin'
import { CheckService } from '../domain/use-cases/checks/check-service'
import { SendEmailLogs } from '../domain/use-cases/email/send-email-logs'
import { FileSystemDatasource } from '../infrastructure/datasources/file-system.datasource'
import { MongoLogDataSource } from '../infrastructure/datasources/mongo-log.datasource'
import { PostgresLogDataSource } from '../infrastructure/datasources/postgres-log.datasource'
import { LogRepositoryImpl } from '../infrastructure/repositories/log.repository.impl'
import { cronService } from './cron/cron-service'
import { EmailService } from './email/email.service'

const logRepository = new LogRepositoryImpl(
  // new FileSystemDatasource()
  // new MongoLogDataSource()
  new PostgresLogDataSource()
)
const emailService = new EmailService()

export class Server {
  constructor(private readonly emailService: EmailService) {}

  public static start() {
    console.log('Server started')

    //TODO Mandar email
    // new SendEmailLogs(emailService, logRepository).execute('jbecerrap95@gmail.com')

    // emailService.sendEmailWithFileSystemLogs('jbecerrap95@gmail.com')

    // cronService.createJob('*/5 * * * * *', () => {
    //   const url = 'https://google.com'
    //   new CheckService(
    //     logRepository,
    //     () => console.log(`Service ${url} is OK`),
    //     (error) => console.error(error)
    //   ).execute(url)
    // })
  }
}
