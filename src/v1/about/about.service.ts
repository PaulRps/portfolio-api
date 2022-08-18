import {Injectable} from '@nestjs/common'
import {Response} from 'express'
import {LinkedinProfileDto} from '../model/dto/linkedin-profile.dto'
import {LinkedinService} from '../model/services/linkedin.service'
import {ResumeService} from '../model/services/resume.service'

@Injectable()
export class AboutService {
  constructor(
    private readonly resumeService: ResumeService,
    private readonly linkedinService: LinkedinService
  ) {}

  buildPdf(res: Response) {
    this.resumeService.buildPdf(res)
  }

  async getAbout(): Promise<LinkedinProfileDto> {
    return this.linkedinService.getProfile()
  }
}
