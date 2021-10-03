import { Inject, Injectable } from "@nestjs/common";
import { Response } from 'express';
import { Readable } from 'stream';
import { HtmlTemplateBuilder } from "./handlebar-html-template.builder";
import { ResumeBuilder } from "./puppeteer-resume-builder";
import { ResumeDataBuilder } from "./resume-data.builder";


@Injectable()
export class ResumeService {
    constructor(
        @Inject('ResumeBuilder') private readonly resumeBuilder: ResumeBuilder,
        @Inject('HtmlTemplateBuilder') private readonly htmlBuilder: HtmlTemplateBuilder,
        @Inject('ResumeDataBuilder') private readonly resumeDataBuilder: ResumeDataBuilder,
    ) { }

    async buildPdf(res: Response) {
        this.resumeDataBuilder.build()
            .then(data => data ? data : Promise.reject())
            .then(data => this.htmlBuilder.build(data))
            .then(html => html ? html : Promise.reject())
            .then(html => this.resumeBuilder.build(html))
            .then(pdf => {
                res.set({
                    'Content-Type': 'application/pdf',
                    'Content-Length': pdf.length,
                });

                const stream = new Readable();
                stream.push(pdf);
                stream.push(null);

                stream.pipe(res);
            })
    }
}