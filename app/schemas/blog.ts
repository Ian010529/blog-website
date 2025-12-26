import z from 'zod'

export const postSchema = z.object({
  title: z.string().min(3, 'Title is required').max(50, 'Title must be at most 50 characters'),
  content: z.string().min(10, 'Content is required'),
})

export const PostSchema = postSchema
