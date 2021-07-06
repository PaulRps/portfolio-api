import { Controller, Get } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { GithubService } from 'src/v1/model/services/github.service';

@Controller(`${Constants.API_V1}/github`)
export class GithubController {
  constructor(private readonly github: GithubService) {}

  @Get('profile')
  async getProfile() {
    return await this.github.getProfile();
  }

  @Get('repos')
  async getRepositories() {
    return this.github.getOwnedRepos();
  }
}
