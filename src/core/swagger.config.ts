import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const SwaggerConfig = new DocumentBuilder()
    .setTitle('Biox-API')
    .setDescription('Essa é a documentação da API Biox, que é um sistema de gerenciamento de receitas, buscando ser criada seguindo os conceitos de clean architecture e DDD (Domain Driven Design).')
    .setVersion('1.0')
    .build();