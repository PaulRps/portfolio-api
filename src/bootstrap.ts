import serverless = require('serverless-http')
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'

export const bootstrapApi = async (): Promise<NestExpressApplication> => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {cors: true})

  return app
}

export const bootstrapServerless = async () => {
  const app = await bootstrapApi()
  app.setGlobalPrefix('.netlify/functions/main')

  await app.init()
  const expressApp = app.getHttpAdapter().getInstance()
  return serverless(expressApp)
}
