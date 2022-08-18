import {CacheTTL, Controller, Get} from '@nestjs/common'
import {Project} from '../model/dto/project.dto'
import {ProjectsService} from './projects.service'

@Controller('v1/projects')
@CacheTTL(10 * 60)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getProjects(): Promise<Project[]> {
    return this.projectsService.getProjects()
  }
}
