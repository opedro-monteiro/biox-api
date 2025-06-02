import { Module } from '@nestjs/common'
import { RecipeRepository } from './domain/repositories/recipe.repository'
import { InMemoryRecipeRepository } from './infra/database/in-memory/in-memory-recipe.repository'
import { RecipeController } from './interfaces/http/recipe.controller'

@Module({
  controllers: [RecipeController],
  providers: [
    {
      provide: RecipeRepository,
      useClass: InMemoryRecipeRepository,
    },
  ],
})
export class RecipesModule {}
