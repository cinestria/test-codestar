'use strict';
import { Context, Handler } from 'aws-lambda'
import * as awsServerlessExpress from 'aws-serverless-express'
import app from './app'
const server = awsServerlessExpress.createServer(app)

export const handler: Handler<any, any> = async (event: any, context: Context) => {
  return awsServerlessExpress.proxy(server, event, context)
}
