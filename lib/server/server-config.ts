import {Connection} from 'typeorm'
/*

import * as path from 'path'

export function loadConfig<T>(config: string) : T {
  if (config == null) {
    return null
  }

  console.log(`configFile : ${config}`)

  const configPath = path.isAbsolute(config) ? config : path.join(process.cwd(), config)

  // eslint-disable-next-line global-require,import/no-dynamic-require
  const newConfig = require(configPath)
  console.log('config require done')
  return newConfig as T
} */


export interface ServerConfig {
  env?: string

  mongo?: { [id: string]: Connection }
}