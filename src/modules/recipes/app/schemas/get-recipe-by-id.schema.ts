import z from 'zod'

export const GetRecipeByIdSchema = z.object({
  id: z.string().uuid('ID inválido'),
  title: z.string().min(1, 'O título é obrigatório'),
  description: z.string().min(1, 'A descrição é obrigatória'),
  ingredients: z.array(z.string()).min(1, 'Os ingredientes são obrigatórios'),
  createdAt: z.string().datetime('Data inválida').optional(),
  updatedAt: z.string().datetime('Data inválida').optional(),
})
