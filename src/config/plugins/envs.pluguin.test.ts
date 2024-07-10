import { envs } from './envs.plugin'

describe('envs.pluguin.ts', () => {
  test('Should return env options', () => {
    expect(envs).toEqual({
      PORT: 3000,
      MAILER_EMAIL: 'jbecerrap95@gmail.com',
      MAILER_SECRET_KEY: 'ncjchuofrqkhhlsw',
      MAILER_SERVICE: 'gmail',
      PROD: false,
      MONGO_URL: 'mongodb://root:123456789@localhost:27017',
      MONGO_DB_NAME: 'NOC_TEST',
      MONGO_USER: 'root',
      MONGO_PASS: '123456789',
    })
  })
})
