import mongoose from 'mongoose'
import { MongoDatabase } from '../init'
import { LogModel } from './log.model'

describe('log model tests', () => {
  beforeAll(async () => {
    await MongoDatabase.connect({
      mongoUrl: process.env.MONGO_URL!,
      dbName: process.env.MONGO_DB_NAME!,
    })
  })

  afterAll(async () => {
    await mongoose.connection.close()
  })

  //
  test('should create a log model', async () => {
    const logData = {
      origin: 'test',
      message: 'test',
      level: 'low',
    }

    const log = await LogModel.create(logData)

    expect(log).toEqual(
      expect.objectContaining({
        ...logData,
        createdAt: expect.any(Date),
        id: expect.any(String),
      })
    )
  })

  test('Should return de schema object', () => {
    const schema = LogModel.schema.obj

    expect(schema).toEqual(
      expect.objectContaining({
        message: { type: expect.any(Function) },
        level: {
          type: expect.any(Function),
          enum: ['low', 'medium', 'high'],
          default: 'low',
        },
        origin: { type: expect.any(Function) },
        createdAt: expect.any(Object),
      })
    )
  })
})
