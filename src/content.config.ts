import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const productsSchema = z.object({
    title: z.string(),
    supplier: z.string(),
    description: z.string(),
    mainImg: z.string(),
    images: z.array(z.string()),
    variants: z.array(z.string()),
    fullDescription: z.string(),
})

const products = defineCollection({
    loader: glob({ pattern: "**/*.md", base: './src/content/products'}),
    schema: productsSchema
})

export type Product = z.infer<typeof productsSchema>
export const collections = { products }