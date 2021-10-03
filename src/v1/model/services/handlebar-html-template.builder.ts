import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as hb from 'handlebars';
import * as path from 'path';
import { ResumeTemplateDto } from '../dto/resume-template.dto';

export interface HtmlTemplateBuilder {
    build(data: ResumeTemplateDto): Promise<string>
}


@Injectable()
export class HandlerbarResumeTemplateBuilder implements HtmlTemplateBuilder {

    async build(data: ResumeTemplateDto): Promise<string> {
        return await this.getTemplateFile()
            .then(template => template ? template : Promise.reject())
            .then(template => {
                const hbTemplate = hb.compile(template, { noEscape: true });
                return hbTemplate(data)
            })
    }

    private async getTemplateFile(): Promise<string> {
        try {
            return await fs.readFileSync(
                this.resolveTemplateFilePath(),
                { encoding: 'utf-8' },
            );
        } catch (err) {
            console.error('error on reading resume template file', err);
        }
    }

    private resolveTemplateFilePath(): string {
        return path.resolve(
            __dirname,
            '../../../assets/resume-template/resume-template.html',
        )
    }
}