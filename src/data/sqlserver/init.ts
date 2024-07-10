import { DataSource } from 'typeorm'

export class SqlServerDatabase {
  static async connect(db: string) {
    const AppDataSource = new DataSource({
      type: 'mssql',
      port: 1433,
      host: '192.168.73.20\\APOLO5',
      username: 'desarrollo',
      password: 'Mdcdllo2015',
      database: db,
      logging: false,
      synchronize: false,
      options: {
        encrypt: true,
        trustServerCertificate: true,
      },
      entities: [],
      migrations: [],
      subscribers: [],
    })

    try {
      const connection = await AppDataSource.initialize()
      console.info('Connected to the database')
      return connection
    } catch (error) {
      console.error('Error connecting to the database')
      throw error
    }
  }

  static async sspExecute(_SSP: string) {
    const [DB, SHEMA, SSP] = _SSP.split('.')
    const connection = await this.connect(DB)
    try {
      const query = `EXEC ${SHEMA}.${SSP}`
      const result = await connection.query(query)
      return result
    } catch (error) {
      console.error('Error executing SSP')
      throw error
    }
  }
}
