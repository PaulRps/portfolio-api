import {Injectable} from '@nestjs/common'
import {Response} from 'express'
import {LinkedinProfileDto} from '../model/dto/linkedin-profile.dto'
import {LinkedinService} from '../model/services/linkedin.service'
import {ResumeService} from '../model/services/resume.service'
import {Education} from '../model/dto/education.dto'
import {JobExperience} from '../model/dto/job-experience.dto'

@Injectable()
export class AboutService {
  constructor(
    private readonly resumeService: ResumeService,
    private readonly linkedinService: LinkedinService
  ) {}

  buildPdf(
    res: Response,
    body?: {
      experiences: JobExperience[]
      education: Education[]
      technologies: string[]
      interests: string[]
      projects: string[]
    }
  ) {
    this.resumeService.buildPdf(res, body)
  }

  async getAbout(): Promise<LinkedinProfileDto> {
    return this.linkedinService.getProfile()
  }
}
