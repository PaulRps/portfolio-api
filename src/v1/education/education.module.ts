import { Module } from '@nestjs/common';
import { ModelModule } from '../model/model.module';
import { EducationController } from './education.controller';
import { EducationService } from './education.service';

@Module({
  controllers: [EducationController],
  providers: [EducationService],
  imports: [ModelModule]
})
export class EducationModule { }
