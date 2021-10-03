import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { ResumeService } from '../model/services/resume.service';

@Injectable()
export class AboutService {
    constructor(private readonly resumeService: ResumeService) { }
    buildPdf(res: Response) {
        this.resumeService.buildPdf(res)
    }
}
