import { CreateRecipeUseCase } from './create-recipe.use-case'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'
import { CreateRecipeDTO } from '../../dtos/create-recipe.dto'
import { Recipe } from '../../../domain/entities/recipe.entity'
import { ICrypto } from 'src/core/crypto/crypto.interface'

// Aqui gosto de usar um pouco de TDD, criar um teste antes de implementar a lógica
describe('CreateRecipeUseCase', () => {
  let createRecipeUseCase: CreateRecipeUseCase
  let recipeRepo: RecipeRepository
  let crypto: ICrypto

  beforeEach(() => {
    recipeRepo = {
      create: jest.fn(),
    } as unknown as RecipeRepository

    crypto = {
      generateUUID: jest.fn().mockResolvedValue('mocked-uuid'),
    } as unknown as ICrypto

    createRecipeUseCase = new CreateRecipeUseCase(recipeRepo, crypto)
  })

  it('deve criar uma receita com sucesso', async () => {
    // Arrange
    const dto: CreateRecipeDTO = {
      title: 'Bolo de Chocolate',
      description: 'Delicioso bolo',
      ingredients: ['chocolate', 'farinha', 'açúcar'],
    }

    const now = new Date()
    const expectedRecipe = new Recipe(
      'mocked-uuid',
      dto.title,
      dto.description,
      dto.ingredients,
      now,
      now
    )

    // Act
    const result = await createRecipeUseCase.execute(dto)

    // Assert
    expect(result).toBeInstanceOf(Recipe)
    expect(result.id).toBe('mocked-uuid')
    expect(result.title).toBe(dto.title)
    expect(result.description).toBe(dto.description)
    expect(result.ingredients).toEqual(dto.ingredients)
    expect(crypto.generateUUID).toHaveBeenCalled()
    expect(recipeRepo.create).toHaveBeenCalledWith(result)
  })

  it('deve lançar um erro se o repositório falhar', async () => {
    // Arrange
    const dto: CreateRecipeDTO = {
      title: 'Bolo de Chocolate',
      description: 'Delicioso bolo',
      ingredients: ['chocolate', 'farinha', 'açúcar'],
    }

    const error = new Error('Erro ao salvar')
    jest.spyOn(recipeRepo, 'create').mockRejectedValueOnce(error)

    // Act & Assert
    await expect(createRecipeUseCase.execute(dto)).rejects.toThrow('Erro ao salvar')
  })

  it('deve lançar um erro se o crypto falhar', async () => {
    // Arrange
    const dto: CreateRecipeDTO = {
      title: 'Bolo de Chocolate',
      description: 'Delicioso bolo',
      ingredients: ['chocolate', 'farinha', 'açúcar'],
    }

    const error = new Error('Erro ao gerar ID')
    jest.spyOn(crypto, 'generateUUID').mockRejectedValueOnce(error)

    // Act & Assert
    await expect(createRecipeUseCase.execute(dto)).rejects.toThrow('Erro ao gerar ID')
  })
})
