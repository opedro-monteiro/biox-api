import { Recipe } from '../../../domain/entities/recipe.entity'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'

export class ListAllRecipesUseCase {
  constructor(private readonly recipeRepo: RecipeRepository) {}

  async execute(): Promise<Recipe[]> {
    const recipes = await this.recipeRepo.findAll()
    return recipes
  }
}
