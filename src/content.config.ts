import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		category: z.enum(['FinTech', 'Platform', 'Other']),
		tags: z.array(z.string()),
		featured: z.boolean().default(false),
		links: z
			.object({
				github: z.string().url().optional(),
				demo: z.string().url().optional(),
			})
			.optional(),
		date: z.coerce.date(),
	}),
});

export const collections = { projects };
