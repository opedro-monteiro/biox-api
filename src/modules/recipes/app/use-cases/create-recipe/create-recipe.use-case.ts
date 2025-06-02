import { Recipe } from '../../../domain/entities/recipe.entity'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'
import { CreateRecipeDTO } from '../../dtos/create-recipe.dto'

export class CreateRecipeUseCase {
  constructor(private readonly recipeRepo: RecipeRepository) {}

  async execute({ title, description, ingredients }: CreateRecipeDTO): Promise<Recipe> {
    const now = new Date()
    const recipe = new Recipe(
      crypto.randomUUID(),
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
