import 'source-map-support/register'

import { NestExpressApplication } from '@nestjs/platform-express'

import { NestFactory } from '@nestjs/core'

import { LogSystem } from './lib/util'

import { AppModule } from './app.module'

import * as graphql from 'graphql'

console.log(graphql.SchemaMetaFieldDef)


let app: NestExpressApplication

export async function createApp(adapter = null) {
  app = await NestFactory.create(AppModule, adapter)

  // express session before passport session
  // TODO 나중에 portal session 물고 있는 부분 수정 해야 함
  /* app.use(express.json({ limit: '50mb' }))
  app.use(express.urlencoded({ limit: '50mb' }))

  app.useStaticAssets('./')
  app.setBaseViewsDir('./')

  app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))

  app.setGlobalPrefix('/api')
  app.enable('trust proxy')
  app.set('trust proxy', true) */

  // connect-history-api-fallback이 nest.js 에서 제대로 동작을 안함
  // this.app.use(fallback())
  const port = 9000
  await app.listen(port)
  LogSystem.info(`Portal server is listening... port:${port}`)
}

async function bootstrap() {
  await createApp()
}

if (typeof require !== 'undefined' && require.main === module) {
  bootstrap()
}
