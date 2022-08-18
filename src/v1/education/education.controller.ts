import {Controller, Get} from '@nestjs/common'
import {Education} from '../model/dto/education.dto'
import {EducationService} from './education.service'

@Controller('v1/education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  async getEducation(): Promise<Education[]> {
    return await this.educationService.getEducation()
  }
}
