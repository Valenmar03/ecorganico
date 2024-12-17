import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const products = defineCollection({
    loader: glob({ pattern: "**/*.md", base: './src/content/products'}),
    schema: z.object({
        title: z.string(),
        supplier: z.string(),
        description: z.string(),
        mainImg: z.string(),
        images: z.array(z.string()),
        variants: z.array(z.string()),
    })
})

export type Product = typeof products
export const collections = { products }