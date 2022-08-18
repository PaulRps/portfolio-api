import {Controller, Get} from '@nestjs/common'
import {JobExperience} from '../model/dto/job-experience.dto'
import {ExperienceService} from './experience.service'

@Controller('v1/job-experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}
  @Get()
  async getJobExperiences(): Promise<JobExperience[]> {
    return await this.experienceService.getExperience()
  }
}
