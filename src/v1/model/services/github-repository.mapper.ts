import {Injectable} from '@nestjs/common'
import {GithubRepositoryDto} from '../dto/github-repository.dto'
import {GithubProjectInfo} from '../enum/github-project-info.enum'
import {GithubService} from './github.service'

@Injectable()
export class GithubRepositoryMapper {
  constructor(private readonly githubService: GithubService) {}

  async toListGithubRepositoryDto(
    projects: any[]
  ): Promise<GithubRepositoryDto[]> {
    if (!Array.isArray(projects))
      throw new Error(
        `error on map githubRepository dto: ${(projects as any).message}`
      )
    return Promise.all(projects.map((proj) => this.toGithubRepositoryDto(proj)))
  }

  async toGithubRepositoryDto(p: any): Promise<GithubRepositoryDto> {
    return {
      name: p.name,
      description: p.description || p.name,
      owner: p.owner.login,
      technologies: await this.buildTechnologiesField(p),
      createdAt: p.created_at,
      url: GithubProjectInfo.getProjectUrl(p.id) || p.html_url,
      isFork: p.fork
    }
  }

  private async buildTechnologiesField(p: any): Promise<string[]> {
    const languages = await this.githubService.getLanguages(p.languages_url)
    const techs = Object.keys(languages)
    techs.push(...p.topics)

    const result = new Set<string>()
    techs.forEach((element) => {
      result.add(element.toLowerCase())
    })

    return [...result]
  }
}
