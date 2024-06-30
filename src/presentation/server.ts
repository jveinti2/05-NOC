import { error } from 'console'
import { CheckService } from '../domain/use-cases/checks/check-service'
import { cronService } from './cron/cron-service'

export class Server {
  public static start() {
    console.log('Server started')

    cronService.createJob('*/5 * * * * *', () => {
      const url = 'https://google.com'
      new CheckService(
        () => console.log(`Service ${url} is OK`),
        (error) => console.error(error)
      ).execute(url)
    })
  }
}
