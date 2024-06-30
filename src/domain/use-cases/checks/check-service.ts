import { LogEntity, LogSeverityLevel } from '../../entities/log.entity'
import { LogRepository } from '../../repository/log.repository'

interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>
}

type SuccessCallback = (() => void) | undefined
type ErrorCallback = ((error: string) => void) | undefined

export class CheckService implements CheckServiceUseCase {
  constructor(
    private logRepository: LogRepository,
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch(url)
      if (!req.ok) throw new Error(`Error on check services ${url}`)

      const log = new LogEntity(`Service ${url} is up`, LogSeverityLevel.low)
      this.logRepository.saveLog(log)

      this.successCallback && this.successCallback()
      return true
    } catch (error) {
      const errorMessage = `Error on check services ${url}: ${error}`
      const log = new LogEntity(errorMessage, LogSeverityLevel.high)

      this.logRepository.saveLog(log)
      this.errorCallback && this.errorCallback(errorMessage)
      return false
    }
  }
}
