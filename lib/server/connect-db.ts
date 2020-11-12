import {ServerConfig} from './server-config'

export async function connectDb(config:ServerConfig) {

  for (const mongo of Object.values(config.mongo)) {
    await mongo.connect()
  }

}