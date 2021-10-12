import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

export interface ResumeBuilder {
    build(html: string)
}

@Injectable()
export class PuppeteerResumeBuilder implements ResumeBuilder {

    async build(html: string) {
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        const page = await browser.newPage();

        await page.setContent(html);

        const pdfBuffer = await page.pdf();

        await page.close();
        await browser.close();

        return pdfBuffer;
    }
}