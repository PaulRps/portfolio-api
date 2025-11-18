import {Inject, Injectable} from '@nestjs/common'
import {Response} from 'express'
import {Readable} from 'stream'
import {HtmlTemplateBuilder} from './handlebar-html-template.builder'
import {ResumeBuilder} from './puppeteer-resume-builder'
import {ResumeDataBuilder} from './resume-data.builder'
import {Education} from '../dto/education.dto'
import {JobExperience} from '../dto/job-experience.dto'
import {ResumeRepository} from '../repository/resume.repository'
import {Resume} from '../schema/resume.schema'
import {ResumeTemplateDto} from '../dto/resume-template.dto'

@Injectable()
export class ResumeService {
  constructor(
    @Inject('ResumeBuilder') private readonly resumeBuilder: ResumeBuilder,
    @Inject('HtmlTemplateBuilder')
    private readonly htmlBuilder: HtmlTemplateBuilder,
    @Inject('ResumeDataBuilder')
    private readonly resumeDataBuilder: ResumeDataBuilder,
    private readonly resumeRepository: ResumeRepository
  ) {}

  async buildPdf(
    res: Response,
    body?: {
      experiences: JobExperience[]
      education: Education[]
      technologies: string[]
      interests: string[]
      projects: string[]
    }
  ) {
    const dataPromise = body
      ? this.resumeDataBuilder
          .buildWithBody(body)
          .then((data) =>
            this.resumeRepository.upsert(this.toResumeDocument(data))
          )
      : this.resumeRepository.find()

    const constData = await this.resumeDataBuilder.build()

    dataPromise
      .then((data) => (data ? data : Promise.reject()))
      .then((resume) => this.toResumeTemplateDto(resume, constData))
      .then((data) => this.htmlBuilder.build(data))
      .then((html) => (html ? html : Promise.reject()))
      .then((html) => this.resumeBuilder.build(html))
      .then((pdf) => {
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Length': pdf.length
        })

        const stream = new Readable()
        stream.push(pdf)
        stream.push(null)

        stream.pipe(res)
      })
  }

  private toResumeTemplateDto(
    resume: Resume,
    constData: ResumeTemplateDto
  ): ResumeTemplateDto {
    return {
      name: constData.name,
      email: constData.email,
      location: constData.location,
      linkedin: constData.linkedin,
      github: constData.github,
      portfolio: constData.portfolio,
      description: constData.description,
      experiences: resume.experiences,
      technologies: resume.skills,
      education: resume.education,
      projects: resume.projects,
      interests: resume.interests
    }
  }

  private toResumeDocument(resume: ResumeTemplateDto): Resume {
    return {
      experiences: resume.experiences,
      education: resume.education,
      skills: resume.technologies,
      interests: resume.interests,
      projects: resume.projects
    }
  }
}
