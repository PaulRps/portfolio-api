import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import env from './core/config/env';
import { CustomExceptionsFilter } from './core/exceptions/exception.filter';
import { UtilsModule } from './utils/utils.module';
import { AboutModule } from './v1/about/about.module';
import { EducationModule } from './v1/education/education.module';
import { ExperienceModule } from './v1/experience/experience.module';
import { ModelModule } from './v1/model/model.module';
import { ProjectsModule } from './v1/projects/projects.module';

@Module({
  imports: [UtilsModule, ModelModule, AboutModule, ExperienceModule, EducationModule, ProjectsModule, ConfigModule.forRoot({
    isGlobal: true, load: [env]
  })],
  providers: [
    {
      provide: APP_FILTER,
      useClass: CustomExceptionsFilter,
    },
  ],
})
export class AppModule { }
