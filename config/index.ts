import { TypeOrmModuleOptions } from '@nestjs/typeorm'

import { GqlModuleOptions } from '@nestjs/graphql'
import LOCAL_QA from './local-qa'
import REMOTE_QA from './remote-qa'
import REMOTE_PROD from './remote-prod'

export interface ConfigData {
  JWT_SECRET:string

  PORT:number

  DB_OPTIONS:TypeOrmModuleOptions

  GQL_OPTIONS?:GqlModuleOptions
}

const defaultConfig:ConfigData = {} as any

if (process.env.STAGE_ENV === 'qa') {
  Object.assign(defaultConfig, LOCAL_QA)
} else if (process.env.STAGE_ENV === 'remote-qa') {
  Object.assign(defaultConfig, REMOTE_QA)
} else if (process.env.STAGE_ENV === 'remote-prod') {
  Object.assign(defaultConfig, REMOTE_PROD)
}
      
export const config:ConfigData = defaultConfig
