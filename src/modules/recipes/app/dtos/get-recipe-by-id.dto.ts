import { z } from 'zod'
import { GetRecipeByIdSchema } from '../schemas/get-recipe-by-id.schema'

export type GetRecipesByIdDTO = z.infer<typeof GetRecipeByIdSchema>
