import {Injectable} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {FetchService} from 'src/utils/fetch.service'

const headers = {Authorization: 'Basic '}

@Injectable()
export class GithubService {
  readonly url: string
  constructor(private configService: ConfigService) {
    this.url = configService.get('github.url', {infer: true})
    headers.Authorization = `Basic ${configService.get('GIT_TOKEN', {
      infer: true
    })}`
  }

  async getProfile(): Promise<any> {
    return FetchService.get<any>(this.url, headers)
  }

  async getRepos(): Promise<any[]> {
    return FetchService.get<any[]>(
      `${this.url}/repos?sort=created&direction=desc`,
      headers
    )
  }

  async getOwnedRepos(): Promise<any[]> {
    return this.excludeForkedRepos(await this.getRepos())
  }

  async getLanguages(projectLanguageUr: string): Promise<any> {
    return FetchService.get<any>(projectLanguageUr, headers)
  }

  private excludeForkedRepos(repos: any[]): any[] {
    return repos.filter((rep) => !Boolean(rep.fork))
  }
}
