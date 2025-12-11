import {z} from 'zod';

export const ListBaseResponseSchema = z.object({
  results: z.array(z.any()),
  total_pages: z.number(),
  total_results: z.number(),
  page: z.number
})