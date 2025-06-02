import { ICrypto } from 'src/core/crypto/crypto.interface'
import { Recipe } from '../../../domain/entities/recipe.entity'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'
import { CreateRecipeDTO } from '../../dtos/create-recipe.dto'

export class CreateRecipeUseCase {
  constructor(
    private readonly recipeRepo: RecipeRepository,
    private readonly crypto: ICrypto
  ) {}

  async execute({ title, description, ingredients }: CreateRecipeDTO): Promise<Recipe> {
    const now = new Date()
    const recipe = new Recipe(
      await this.crypto.generateUUID(),
      title,
      description,
      ingredients,
      now,
      now
    )

    await this.recipeRepo.create(recipe)
    return recipe
  }
}
