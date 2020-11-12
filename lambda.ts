
import 'source-map-support/register'
import { ExpressAdapter } from '@nestjs/platform-express'
import { Context, Handler } from 'aws-lambda'
import * as serverless from 'aws-serverless-express'
import * as express from 'express'
import { Server } from 'http'
import { createApp } from '.'

let cachedServer: Server

async function bootstrapServer(): Promise<Server> {
  const expressApp = express()
  const adapter = new ExpressAdapter(expressApp)

  await createApp(adapter)

  return serverless.createServer(expressApp)
}

export const handler: Handler<any, any> = async (event: any, context: Context) => {
  if (cachedServer == null) {
    cachedServer = await bootstrapServer()
  }
  return serverless.proxy(cachedServer, event, context, 'PROMISE').promise
}

if (typeof require !== 'undefined' && require.main === module) {
  bootstrapServer()
}