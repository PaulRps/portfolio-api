import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {Resume, ResumeDocument} from '../schema/resume.schema'

@Injectable()
export class ResumeRepository {
  constructor(
    @InjectModel(Resume.name) private resumeModel: Model<ResumeDocument>
  ) {}

  async upsert(resume: Resume): Promise<Resume> {
    return this.resumeModel.findOneAndUpdate({}, resume, {
      upsert: true,
      new: true
    })
  }

  async find(): Promise<Resume> {
    return this.resumeModel.findOne().exec()
  }
}
