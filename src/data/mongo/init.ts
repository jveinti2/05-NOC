import mongoose from 'mongoose'

interface ConnectionOptions {
  mongoUrl: string
  dbName: string
}

export class MongoDatabase {
  static async connect(options: ConnectionOptions) {
    const { mongoUrl, dbName } = options

    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      })
      // console.info('Connected to the database')

      return true
    } catch (error) {
      console.error('Error connecting to the database')
      return false
    }
  }
}
