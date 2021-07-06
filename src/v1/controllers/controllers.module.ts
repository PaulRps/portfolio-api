import { Module } from '@nestjs/common';
import { ModelModule } from 'src/v1/model/model.module';
import { GithubController } from './github.controller';
import { LinkedinController } from './linkedin.controller';

@Module({
  imports: [ModelModule],
  controllers: [GithubController, LinkedinController],
  providers: [],
})
export class ControllersModule {}
