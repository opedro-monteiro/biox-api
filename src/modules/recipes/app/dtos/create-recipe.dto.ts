import z from 'zod'
import { CreateRecipeSchema } from '../schemas/create-recipe.schema'

export type CreateRecipeDTO = z.infer<typeof CreateRecipeSchema>
