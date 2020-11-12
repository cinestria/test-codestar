import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigData } from '.'
import { dataDbOption } from './default'

export default {
  JWT_SECRET : 'jwt_secret2!',

  PORT : 9000,

  DB_OPTIONS: {
    ...dataDbOption,
    type: 'mongodb',
    host: '52.78.220.132',
    port: 19123,
    username: 'philreal',
    password: 'philreal!',
    authSource: 'admin',
    keepConnectionAlive: true,
  } as TypeOrmModuleOptions,

  GQL_OPTIONS: {
    autoSchemaFile: 'schema.gpl',
  },
} as ConfigData
