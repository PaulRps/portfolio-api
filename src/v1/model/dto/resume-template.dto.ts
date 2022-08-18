import {Education} from './education.dto'
import {JobExperience} from './job-experience.dto'
import {Location} from './location.dto'

export interface ResumeTemplateDto {
  name: string
  email: string
  location: Location
  linkedin: {
    url: string
  }
  github: {
    url: string
  }
  portfolio: {
    url: string
  }
  description: string
  experiences: JobExperience[]

  technologies: string[]
  education: Education[]

  projects: string[]
  interests: string[]
}
