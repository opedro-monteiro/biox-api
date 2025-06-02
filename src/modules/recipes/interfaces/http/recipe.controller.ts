import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common'
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger'
import { CreateRecipeUseCase } from '../../app/use-cases/create-recipe/create-recipe.use-case'
import { RecipeRepository } from '../../domain/repositories/recipe.repository'
import { RecipePresenter } from '../../infra/presenter/recipe.presenter'
import { CreateRecipeSwaggerDto } from '../../app/swagger/create-recipe-swagger.dto'
import { ZodValidationPipe } from '../pipes/zod-validation.pipe'
import { CreateRecipeSchema } from '../../app/schemas/create-recipe.schema'
import { RecipePresenterDto } from '../../app/swagger/recipe.swagger.dto'
import { ListAllRecipesUseCase } from '../../app/use-cases/list-all-recipes/list-all-recipes.use-case'
import { GetRecipeByIdUseCase } from '../../app/use-cases/get-recipe-by-id/get-recipe-by-id.use-case'
import { ICrypto } from 'src/core/crypto/crypto.interface'

@Controller('v1/recipes')
export class RecipeController {
  constructor(
    private readonly recipeRepo: RecipeRepository,
    private readonly crypto: ICrypto
  ) {}

  @Post()
  @ApiBody({
    type: CreateRecipeSwaggerDto,
    description: 'Criar uma receita',
    required: true,
  })
  @UsePipes(new ZodValidationPipe(CreateRecipeSchema))
  async create(@Body() body: CreateRecipeSwaggerDto) {
    const useCase = new CreateRecipeUseCase(this.recipeRepo, this.crypto)
    const recipe = await useCase.execute(body)
    return RecipePresenter.toHTTP(recipe)
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista de receitas',
    type: [RecipePresenterDto],
  })
  @ApiResponse({
    type: RecipePresenterDto,
    status: 200,
  })
  async getAll() {
    const useCase = new ListAllRecipesUseCase(this.recipeRepo)
    const recipes = await useCase.execute()
    return recipes.map(RecipePresenter.toHTTP)
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'ID da receita em formato UUID',
    type: [RecipePresenterDto],
  })
  @ApiResponse({
    type: RecipePresenterDto,
    status: 200,
  })
  async getById(@Param('id') id: string) {
    const useCase = new GetRecipeByIdUseCase(this.recipeRepo)
    const recipe = await useCase.execute(id)
    if (!recipe) return { message: 'Recipe not found' }
    return RecipePresenter.toHTTP(recipe)
  }
}
