import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { SwaggerConfig } from './core/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI, // ← define o tipo
    prefix: 'v',              // ← gera URLs como /v1/, /v2/
    defaultVersion: '1',
  })

  const documentFactory = () => SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup('api/docs', app, documentFactory, {
    jsonDocumentUrl: 'swagger/json',
  });
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
