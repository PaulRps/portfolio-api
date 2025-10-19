import {Injectable} from '@nestjs/common'
import {ResumeTemplateDto} from '../dto/resume-template.dto'
import {LinkedinService} from './linkedin.service'
import {JobExperience} from '../dto/job-experience.dto'
import {Education} from '../dto/education.dto'

export interface ResumeDataBuilder {
  build(): Promise<ResumeTemplateDto>
  buildWithBody(body: {
    experiences: JobExperience[]
    education: Education[]
    technologies: string[]
    interests: string[]
    projects: string[]
  }): Promise<ResumeTemplateDto>
}

@Injectable()
export class ResumeDataBuilderService implements ResumeDataBuilder {
  constructor(private readonly likedinService: LinkedinService) {}

  async build(): Promise<ResumeTemplateDto> {
    const exps = await this.likedinService.getExperience()
    const edu = await this.likedinService.getEducation()
    const likedinProfile = await this.likedinService.getProfile()

    return {
      name: likedinProfile.fulllName,
      email: likedinProfile.email,
      location: likedinProfile.location,
      linkedin: {
        url: likedinProfile.linkedinUrl
      },
      github: {
        url: likedinProfile.githubUrl
      },
      portfolio: {
        url: likedinProfile.portfolioUrl
      },
      description:
        'I am a full-stack software engineer especially interested in building, scaling up and shipping magical and reliable applications.',
      experiences: exps,
      technologies: [
        'Languages (experience in years): Java (~3), Kotlin (~2), JavaScript (~4), TypeScript (~4)',
        'Technologies: 	Spring (Boot, Security, Data), NestJs, Angular, MongoDB, Microsoft SQL Server, Postgres, FireStore, Google Cloud Platform, Mongo Realm, Firebase, Git, Bitbucket, Gitlab, Docker, Redis, Jira'
      ],
      education: edu,
      projects: [
        'I contributed to an open source project of digital identity from Hyperledger Aries. I fixed an error in the Java Wrapper, I included a Rust method that was missed in the Java interface API.',
        'I created a system to manage football matches. The system is composed of an Angular client and a Spring Boot REST stateless API. I used JWT with Spring Security to make secure communications and some design patterns like Factory. I designed the screens with Angular Material with dynamic themes like dark and light themes. The system is deployed in Heroku (API) and Netlify (client).',
        'I created a crawler to read the Brazil shipping service page of tracking objects and notify users when tracking updates are done. The users receive an email with tracking info of their objects. I used Spring Boot, Java, MongoDB  and Mongo Realm triggers to periodically make requests to check for updates in tracked objects.',
        'I created a Maven plugin to lint commit messages with a configurable pattern in the POM. That plugin hooks the commit just before it goes to branch and verify the message based on a regex pattern defined in POM.'
      ],
      interests: [
        'Learn innovative technologies',
        'Design complex testable systems with all kind of techs from a microservices environment',
        'Work with amazing people',
        'Improve english knowledge',
        'Be a better person and software engineer'
      ]
    }
  }
  
  async buildWithBody(
    body: {
      experiences: JobExperience[]
      education: Education[]
      technologies: string[]
      interests: string[]
      projects: string[]
    }
  ): Promise<ResumeTemplateDto> {
    const exps = body.experiences
    const edu = body.education
    const technologies = body.technologies
    const interests = body.interests
    const projects = body.projects
    const likedinProfile = await this.likedinService.getProfile()

    return {
      name: likedinProfile.fulllName,
      email: likedinProfile.email,
      location: likedinProfile.location,
      linkedin: {
        url: likedinProfile.linkedinUrl
      },
      github: {
        url: likedinProfile.githubUrl
      },
      portfolio: {
        url: likedinProfile.portfolioUrl
      },
      description:
        'I am a full-stack software engineer especially interested in building, scaling up and shipping magical and reliable applications.',
      experiences: exps,
      technologies: technologies || [
        'Languages (experience in years): Java (~3), Kotlin (~2), JavaScript (~4), TypeScript (~4)',
        'Technologies: 	Spring (Boot, Security, Data), NestJs, Angular, MongoDB, Microsoft SQL Server, Postgres, FireStore, Google Cloud Platform, Mongo Realm, Firebase, Git, Bitbucket, Gitlab, Docker, Redis, Jira'
      ],
      education: edu,
      projects: projects || [
        'I contributed to an open source project of digital identity from Hyperledger Aries. I fixed an error in the Java Wrapper, I included a Rust method that was missed in the Java interface API.',
        'I created a system to manage football matches. The system is composed of an Angular client and a Spring Boot REST stateless API. I used JWT with Spring Security to make secure communications and some design patterns like Factory. I designed the screens with Angular Material with dynamic themes like dark and light themes. The system is deployed in Heroku (API) and Netlify (client).',
        'I created a crawler to read the Brazil shipping service page of tracking objects and notify users when tracking updates are done. The users receive an email with tracking info of their objects. I used Spring Boot, Java, MongoDB  and Mongo Realm triggers to periodically make requests to check for updates in tracked objects.',
        'I created a Maven plugin to lint commit messages with a configurable pattern in the POM. That plugin hooks the commit just before it goes to branch and verify the message based on a regex pattern defined in POM.'
      ],
      interests: interests || [
        'Learn innovative technologies',
        'Design complex testable systems with all kind of techs from a microservices environment',
        'Work with amazing people',
        'Improve english knowledge',
        'Be a better person and software engineer'
      ]
    }
  }
}
