import { Module } from '@nestjs/common'
import { RecipeRepository } from './domain/repositories/recipe.repository'
import { InMemoryRecipeRepository } from './infra/database/in-memory/in-memory-recipe.repository'
import { RecipeController } from './interfaces/http/recipe.controller'
import { ICrypto } from 'src/core/crypto/crypto.interface'
import { Uuid } from 'src/infra/crypto/uuid'

@Module({
  controllers: [RecipeController],
  providers: [
    {
      provide: RecipeRepository,
      useClass: InMemoryRecipeRepository,
    },
    {
      provide: ICrypto,
      useClass: Uuid,
    },
  ],
})
export class RecipesModule {}
