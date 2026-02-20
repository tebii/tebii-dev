import { defineCollection, z } from "astro:content";

const writeups = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    platform: z.string().optional(),
    difficulty: z.enum(["Easy", "Medium", "Hard"]).optional(),
    draft: z.boolean().default(false),
    summary: z.string().optional(),
  }),
});

export const collections = { writeups };
