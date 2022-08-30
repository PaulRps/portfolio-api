import {bootstrapApi} from './bootstrap'
import {Constants} from './utils/constants'
import {OpenApiService} from './utils/openapi.service'

async function startServer() {
  const app = await bootstrapApi()
  app.setGlobalPrefix('api')

  OpenApiService.setup(Constants.SWAGGER_URL, app)

  await app.listen(process.env.PORT || 3000)
}
startServer()
