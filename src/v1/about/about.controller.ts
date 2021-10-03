import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AboutService } from './about.service';

@Controller('v1/about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) { }

  @Get('resume')
  async getResume(@Res() res: Response) {
    this.aboutService.buildPdf(res)
  }
}
