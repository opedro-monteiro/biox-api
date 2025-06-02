import { ApiProperty } from '@nestjs/swagger'

export class RecipePresenterDto {
  @ApiProperty({
    description: 'ID único da receita',
    example: '123e4567-e89b-12d3-a456-426614174000',
    required: false,
  })
  id?: string

  @ApiProperty({
    description: 'Título da receita',
    example: 'Bolo de cenoura',
    minLength: 1,
    required: true,
  })
  title: string

  @ApiProperty({
    example: ['cenoura', 'açúcar'],
    type: [String],
    description: 'Lista de ingredientes da receita',
    required: true,
    minimum: 1,
  })
  ingredients: string[]

  @ApiProperty({
    description: 'Data de criação da receita',
    example: '2024-03-20T10:00:00Z',
    required: false,
  })
  createdAt?: string
}
