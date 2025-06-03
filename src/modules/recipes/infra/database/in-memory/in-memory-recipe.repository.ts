import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'
import { Recipe } from '../../../domain/entities/recipe.entity'
import { RecipeRepository } from '../../../domain/repositories/recipe.repository'

@Injectable()
export class InMemoryRecipeRepository implements RecipeRepository {
  private recipes: Recipe[] = []

  // Aki vai depender da regra de Negócios
  async create(recipe: Recipe): Promise<void> {
    const existingRecipe = this.recipes.find(rec =>
      rec.title === recipe.title &&
      rec.description === recipe.description &&
      JSON.stringify(rec.ingredients) === JSON.stringify(recipe.ingredients)
    )
  
    if (existingRecipe) throw new ConflictException('Já existe essa receita')
    
    this.recipes.push(recipe)
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes
  }

  async findById(id: string): Promise<Recipe> {
    const recipe = this.recipes.find(recipe => recipe.id === id)
    if (!recipe) throw new NotFoundException('A receita não foi encontrada') 
      
    return recipe
  }
}
