import { Module } from '@nestjs/common';
import { GithubService } from './services/github.service';

@Module({
  imports: [],
  exports: [GithubService],
  providers: [GithubService],
})
export class ModelModule {}
