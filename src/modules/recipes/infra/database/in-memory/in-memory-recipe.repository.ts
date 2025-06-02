import { Injectable } from '@nestjs/common'
import { Recipe } from '../../../domain/entities/recipe.entity'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'

@Injectable()
export class InMemoryRecipeRepository implements RecipeRepository {
  private recipes: Recipe[] = []

  async create(recipe: Recipe): Promise<void> {
    const existingRecipe = this.recipes.find(rec => rec.title === recipe.title)
    if (existingRecipe) throw new Error('Já existe uma receita com esse título')
    this.recipes.push(recipe)
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes
  }

  async findById(id: string): Promise<Recipe | null> {
    return this.recipes.find(recipe => recipe.id === id) || null
  }
}
