import { Recipe } from '../../../domain/entities/recipe.entity'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'

export class GetRecipeByIdUseCase {
  constructor(private readonly recipeRepo: RecipeRepository) {}

  async execute(id: string): Promise<Recipe | null> {
    const recipes = await this.recipeRepo.findById(id)
    return recipes
  }
}
