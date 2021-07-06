import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { Constants } from 'src/utils/constants';

@Controller(`${Constants.API_V1}/linkedin`)
export class LinkedinController {
  @Get('profile')
  getProfile() {
    throw new HttpException('It is not implemented!', HttpStatus.NOT_IMPLEMENTED);
  }
}
