import { ApiProperty } from '@nestjs/swagger'

export class CreateRecipeSwaggerDto {
  @ApiProperty({
    description: 'Título da receita',
    example: 'Bolo de cenoura',
    minLength: 5,
    required: true,
  })
  title: string

  @ApiProperty({
    description: 'Descrição da receita',
    example: 'Uma deliciosa receita de bolo de cenoura com cobertura de chocolate.',
    minLength: 5,
    required: true,
  })
  description: string

  @ApiProperty({
    example: ['cenoura', 'açúcar'],
    type: [String],
    description: 'Lista de ingredientes da receita',
    required: true,
    minimum: 1,
  })
  ingredients: string[]
}
