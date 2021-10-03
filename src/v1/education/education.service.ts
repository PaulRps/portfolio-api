import { Injectable } from '@nestjs/common';
import { Education } from '../model/dto/education.dto';
import { LinkedinService } from '../model/services/linkedin.service';

@Injectable()
export class EducationService {
    constructor(private readonly linkedinService: LinkedinService) { }
    
    async getEducation(): Promise<Education[]> {
        return this.linkedinService.getEducation()
    }
}
