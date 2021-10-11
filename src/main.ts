import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Constants } from './utils/constants';
import { OpenApiService } from './utils/openapi.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  OpenApiService.setup(Constants.SWAGGER_URL, app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
