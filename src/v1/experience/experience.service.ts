import { Injectable } from '@nestjs/common';
import { JobExperience } from '../model/dto/job-experience.dto';
import { LinkedinService } from '../model/services/linkedin.service';

@Injectable()
export class ExperienceService {
    constructor(private readonly linkedinService: LinkedinService) { }

    async getExperience(): Promise<JobExperience[]> {
        return this.linkedinService.getExperience()
    }

}
