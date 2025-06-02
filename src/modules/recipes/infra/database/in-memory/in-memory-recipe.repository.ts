import { Injectable } from '@nestjs/common'
import { Recipe } from '../../../domain/entities/recipe.entity'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'

@Injectable()
export class InMemoryRecipeRepository implements RecipeRepository {
  private recipes: Recipe[] = []

  async create(recipe: Recipe): Promise<void> {
    this.recipes.push(recipe)
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes
  }

  async findById(id: string): Promise<Recipe | null> {
    return this.recipes.find(r => r.id === id) || null
  }
}
