import { Injectable } from '@nestjs/common';
import { Project } from '../model/dto/project.dto';
import { GithubRepositoryMapper } from '../model/services/github-repository.mapper';
import { GithubService } from '../model/services/github.service';

@Injectable()
export class ProjectsService {
    constructor(
        private readonly github: GithubService,
        private readonly mapper: GithubRepositoryMapper
    ) { }

    async getProjects(): Promise<Project[]> {
        return await this.github.getRepos()
            .then(repos => this.mapper.toListGithubRepositoryDto(repos))
    }

}
