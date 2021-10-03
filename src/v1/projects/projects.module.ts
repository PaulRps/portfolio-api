import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ModelModule } from '../model/model.module';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
  controllers: [ProjectsController],
  providers: [
    ProjectsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  imports: [ModelModule, CacheModule.register()]
})
export class ProjectsModule { }
