import serverless = require('serverless-http')
import {NestFactory} from '@nestjs/core'
import {AppModule} from './app.module'
import {Constants} from './utils/constants'
import {OpenApiService} from './utils/openapi.service'
import { INestApplication } from '@nestjs/common'

export const bootstrapApi = async (): Promise<INestApplication> => {
  const app = await NestFactory.create(AppModule, {cors: true})

  OpenApiService.setup(Constants.SWAGGER_URL, app)

  return app
}

export const bootstrapServerless = async () => {
  const app = await bootstrapApi()
  app.setGlobalPrefix('.netlify/functions/main')

  await app.init()
  const expressApp = app.getHttpAdapter().getInstance()
  return serverless(expressApp)
}
