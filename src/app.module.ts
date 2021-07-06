import { APP_FILTER } from '@nestjs/core';
import { CustomExceptionsFilter } from './core/exceptions/exception.filter';
import { UtilsModule } from './utils/utils.module';
import { ModelModule } from './v1/model/model.module';
import { ControllersModule } from './v1/controllers/controllers.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UtilsModule, ModelModule, ControllersModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionsFilter,
    },
  ],
})
export class AppModule {}
