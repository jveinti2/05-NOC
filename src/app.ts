import 'dotenv/config'

import { envs } from './config/plugins/envs.plugin'
import { MongoDatabase } from './data/mongo'
import { Server } from './presentation/server'
import { PrismaClient } from '@prisma/client'
;(async () => {
  main()
})()

async function main() {
  // await MongoDatabase.connect({
  //   mongoUrl: envs.MONGO_URL,
  //   dbName: envs.MONGO_DB_NAME,
  // })

  // const prisma = new PrismaClient()
  // const newLog = await prisma.logModel.create({
  //   data: {
  //     message: 'Hello, World!',
  //     level: 'HIGH',
  //     origin: 'app.ts',
  //   },
  // })

  // console.log(newLog)

  Server.start()
}
