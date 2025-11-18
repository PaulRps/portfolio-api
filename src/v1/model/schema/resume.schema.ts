import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
import {JobExperience} from '../dto/job-experience.dto'
import {Education} from '../dto/education.dto'

export type ResumeDocument = Resume & Document

@Schema({
  collection: 'resume',
  _id: false
})
export class Resume {
  @Prop()
  experiences: JobExperience[]

  @Prop()
  education: Education[]

  @Prop([String])
  projects: string[]

  @Prop([String])
  skills: string[]

  @Prop([String])
  interests: string[]
}

export const ResumeSchema = SchemaFactory.createForClass(Resume)
