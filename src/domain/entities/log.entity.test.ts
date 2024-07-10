import { LogEntity, LogSeverityLevel } from './log.entity'

describe('log entity tests', () => {
  const dataObj = {
    message: 'test',
    level: LogSeverityLevel.low,
    origin: 'test',
  }
  //
  test('should create a log entity', () => {
    const log = new LogEntity(dataObj)

    expect(log).toBeInstanceOf(LogEntity)
    expect(log.message).toBe(dataObj.message)
    expect(log.level).toBe(dataObj.level)
    expect(log.origin).toBe(dataObj.origin)
    expect(log.createdAt).toBeInstanceOf(Date)
  })

  //
  test('should create a log entity from json', () => {
    const json = `{"message":"test","level":"low","origin":"log.entity.ts","createdAt":"2021-08-10T00:00:00.000Z"}`

    const log = LogEntity.fromJson(json)

    expect(log).toBeInstanceOf(LogEntity)
    expect(log.message).toBe('test')
    expect(log.level).toBe(LogSeverityLevel.low)
    expect(log.origin).toBe('log.entity.ts')
    expect(log.createdAt).toBeInstanceOf(Date)
  })
  //
  test('should create a log entity from object', () => {
    const log = LogEntity.fromObject(dataObj)

    expect(log).toBeInstanceOf(LogEntity)
    expect(log.message).toBe(dataObj.message)
    expect(log.level).toBe(dataObj.level)
    expect(log.origin).toBe(dataObj.origin)
    expect(log.createdAt).toBeInstanceOf(Date)
  })
})
