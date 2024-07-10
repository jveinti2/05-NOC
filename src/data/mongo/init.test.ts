import mongoose from 'mongoose'
import { MongoDatabase } from './init'

describe('init MongoDb', () => {
  afterAll(async () => {
    mongoose.connection.close()
  })

  test('should connect to mongoDb', async () => {
    const connected = await MongoDatabase.connect({
      mongoUrl: process.env.MONGO_URL!,
      dbName: process.env.MONGO_DB_NAME!,
    })

    expect(connected).toBe(true)
  })
})
