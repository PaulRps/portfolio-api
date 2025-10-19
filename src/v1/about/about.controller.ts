import {Body, Controller, Get, Post, Res} from '@nestjs/common'
import {Response} from 'express'
import {AboutService} from './about.service'
import { JobExperience } from '../model/dto/job-experience.dto'
import { Education } from '../model/dto/education.dto'

@Controller('v1/about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get('resume')
  async getResume(@Res() res: Response) {
    this.aboutService.buildPdf(res)
  }

  @Get()
  async getAbout() {
    return this.aboutService.getAbout()
  }

  @Post('resume/build')
  async buildResume(
    @Res() res: Response, 
    @Body() body: {
      experiences: JobExperience[],
      education: Education[],
      technologies: string[],
      interests: string[],
      projects: string[]
    }) {
    this.aboutService.buildPdf(res, body)
  }
}
