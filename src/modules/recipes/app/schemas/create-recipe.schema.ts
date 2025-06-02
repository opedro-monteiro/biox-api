import { z } from 'zod'

export const CreateRecipeSchema = z.object({
  title: z.string().min(5, 'O título é obrigatório'),
  description: z.string().min(5, 'A descrição é obrigatória'),
  ingredients: z.array(z.string()).min(1, 'Os ingredientes são obrigatórios'),
})
