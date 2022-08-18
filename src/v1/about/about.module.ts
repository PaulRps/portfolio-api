import {Module} from '@nestjs/common'
import {AboutService} from './about.service'
import {AboutController} from './about.controller'
import {ModelModule} from '../model/model.module'

@Module({
  controllers: [AboutController],
  providers: [AboutService],
  imports: [ModelModule]
})
export class AboutModule {}
