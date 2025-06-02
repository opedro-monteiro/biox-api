import z from 'zod'

export const ListAllRecipesSchema = z.object({
  id: z.string().uuid('ID inválido').optional(),
  title: z.string().min(1, 'O título é obrigatório'),
  ingredients: z.array(z.string()).min(1, 'Os ingredientes são obrigatórios'),
  createdAt: z.string().datetime('Data inválida').optional(),
})
