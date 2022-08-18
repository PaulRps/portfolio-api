import {Module} from '@nestjs/common'
import {ModelModule} from '../model/model.module'
import {ExperienceController} from './experience.controller'
import {ExperienceService} from './experience.service'

@Module({
  controllers: [ExperienceController],
  providers: [ExperienceService],
  imports: [ModelModule]
})
export class ExperienceModule {}
