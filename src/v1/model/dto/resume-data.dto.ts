import {ResumeTemplateDto} from './resume-template.dto'

export type ResumeDataDto = Pick<
  ResumeTemplateDto,
  'experiences' | 'education' | 'technologies' | 'interests' | 'projects'
>
