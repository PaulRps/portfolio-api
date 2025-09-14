import {Injectable} from '@nestjs/common'
import {ConfigService} from '@nestjs/config'
import {FetchService} from 'src/utils/fetch.service'

const headers = {Authorization: 'BEARER '}

@Injectable()
export class GithubService {
  readonly url: string
  constructor(private configService: ConfigService) {
    this.url = configService.get('github.url', {infer: true})
    headers.Authorization = `BEARER ${configService.get('GIT_TOKEN', {
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
    try {
      return FetchService.get<any>(projectLanguageUr, headers)
    } catch (e) {
      console.log(e);
      throw e
      
    }
    
  }

  private excludeForkedRepos(repos: any[]): any[] {
    return repos.filter((rep) => !Boolean(rep.fork))
  }
}
