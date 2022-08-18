import {DocumentBuilder, OpenAPIObject, SwaggerModule} from '@nestjs/swagger'
import {writeFileSync} from 'fs'
import * as path from 'path'

export class OpenApiService {
  public static setup(swaggerUrl: string, app: any) {
    const doc = this.createDoc(app)
    this.saveDoc(doc)
    SwaggerModule.setup(swaggerUrl, app, doc)
  }

  public static createDoc(app: any): OpenAPIObject {
    const config = new DocumentBuilder()
      .setTitle("PaulRps's portfolio api")
      .setDescription(
        "The PaulRps's portfolio api that integrates all professional information (e.g. Github repos, Linkedin etc.)"
      )
      .setVersion('1.0')
      .addTag('portfolio_api')
      .build()

    return SwaggerModule.createDocument(app, config)
  }

  public static saveDoc(document: OpenAPIObject) {
    const outputPath = path.resolve(process.cwd(), 'swagger.json')
    writeFileSync(outputPath, JSON.stringify(document), {encoding: 'utf8'})
  }
}
