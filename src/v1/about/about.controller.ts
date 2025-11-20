import { Body, Controller, Get, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { LinkedinProfileDto } from '../model/dto/linkedin-profile.dto'
import { ResumeDataDto } from '../model/dto/resume-data.dto'
import { AboutService } from './about.service'

@Controller('v1/about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get('resume')
  async getResume(@Res() res: Response): Promise<void> {
    this.aboutService.buildPdf(res)
  }

  @Get()
  async getAbout(): Promise<LinkedinProfileDto> {
    return this.aboutService.getAbout()
  }

  @Post('resume/build')
  async buildResume(
    @Res() res: Response,
    @Body()
    body: ResumeDataDto
  ): Promise<void> {
    this.aboutService.buildPdf(res, body)
  }

  @Get(`resume/data`)
  async getResumeData(): Promise<ResumeDataDto> {
    return this.aboutService.getResumeData()
  }
}
