import { CreateRecipeUseCase } from './create-recipe.use-case'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'
import { CreateRecipeDTO } from '../../dtos/create-recipe.dto'
import { Recipe } from '../../../domain/entities/recipe.entity'

// Aqui gosto de usar um pouco de TDD, criar um teste antes de implementar a lógica
describe('CreateRecipeUseCase', () => {
  let createRecipeUseCase: CreateRecipeUseCase
  let recipeRepo: RecipeRepository

  beforeEach(() => {
    recipeRepo = {
      create: jest.fn(),
    } as unknown as RecipeRepository

    createRecipeUseCase = new CreateRecipeUseCase(recipeRepo)
  })

  it('deve criar uma receita com sucesso', async () => {
    // Arrange
    const dto: CreateRecipeDTO = {
      title: 'Bolo de Chocolate',
      description: 'Delicioso bolo',
      ingredients: ['chocolate', 'farinha', 'açúcar'],
    }

    // Act
    const result = await createRecipeUseCase.execute(dto)

    // Assert
    expect(result).toBeInstanceOf(Recipe)
    expect(result.title).toBe(dto.title)
    expect(result.description).toBe(dto.description)
    expect(result.ingredients).toEqual(dto.ingredients)
    expect(recipeRepo.create).toHaveBeenCalledWith(result)
  })

  it('deve lançar um erro se o repositório falhar', async () => {
    const dto: CreateRecipeDTO = {
      title: 'Bolo de Chocolate',
      description: 'Delicioso bolo',
      ingredients: ['chocolate', 'farinha', 'açúcar'],
    }

    const error = new Error('Erro ao salvar')
    jest.spyOn(recipeRepo, 'create').mockRejectedValueOnce(error)

    await expect(createRecipeUseCase.execute(dto)).rejects.toThrow('Erro ao salvar')
  })
})
