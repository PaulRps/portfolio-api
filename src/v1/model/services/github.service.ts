import { Injectable } from '@nestjs/common';
import { FetchService } from 'src/utils/fetch.service';

@Injectable()
export class GithubService {
  readonly url: string = 'https://api.github.com/users/paulrps';

  getProfile(): any {
    return FetchService.get(this.url);
  }

  getRepos(): any {
    return FetchService.get(`${this.url}/repos`);
  }

  async getOwnedRepos() {
    return this.excludeForkedRepos(await this.getRepos());
  }

  excludeForkedRepos(repos: any[]) {
    return repos.filter((rep) => !Boolean(rep.fork));
  }
}
