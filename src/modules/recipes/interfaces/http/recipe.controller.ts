import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRecipeUseCase } from '../../app/use-cases/create-recipe.use-case';
import { RecipeRepository } from '../../domain/repositories/recipe.repository';
import { RecipePresenter } from '../../infra/presenter/recipe.presenter';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeRepo: RecipeRepository) { }

  @Post()
  async create(@Body() body: { title: string; description: string; ingredients: string[] }) {
    const useCase = new CreateRecipeUseCase(this.recipeRepo);
    const recipe = await useCase.execute(body);
    return RecipePresenter.toHTTP(recipe);
  }

  @Get()
  async getAll() {
    const recipes = await this.recipeRepo.findAll();
    return recipes.map(RecipePresenter.toHTTP);
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const recipe = await this.recipeRepo.findById(id);
    if (!recipe) return { message: 'Not found' };
    return RecipePresenter.toHTTP(recipe);
  }
}
