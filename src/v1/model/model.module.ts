import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {GithubRepositoryMapper} from './services/github-repository.mapper'
import {GithubService} from './services/github.service'
import {HandlerbarResumeTemplateBuilder} from './services/handlebar-html-template.builder'
import {LinkedinService} from './services/linkedin.service'
import {PuppeteerResumeBuilder} from './services/puppeteer-resume-builder'
import {ResumeDataBuilderService} from './services/resume-data.builder'
import {ResumeService} from './services/resume.service'
import {Resume, ResumeSchema} from './schema/resume.schema'
import {ResumeRepository} from './repository/resume.repository'

const services = [
  GithubService,
  LinkedinService,
  GithubRepositoryMapper,
  ResumeService,
  PuppeteerResumeBuilder,
  ResumeRepository
]

@Module({
  imports: [
    MongooseModule.forFeature([{name: Resume.name, schema: ResumeSchema}])
  ],
  exports: services,
  providers: [
    ...services,
    {
      provide: 'ResumeBuilder',
      useClass: PuppeteerResumeBuilder
    },
    {
      provide: 'HtmlTemplateBuilder',
      useClass: HandlerbarResumeTemplateBuilder
    },
    {
      provide: 'ResumeDataBuilder',
      useClass: ResumeDataBuilderService
    }
  ]
})
export class ModelModule {}
