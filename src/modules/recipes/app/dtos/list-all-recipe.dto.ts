import { z } from 'zod'
import { ListAllRecipesSchema } from '../schemas/list-all-recipe.schema'

export type ListAllRecipesDTO = z.infer<typeof ListAllRecipesSchema>
