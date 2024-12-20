import type { InferEntrySchema, RenderedContent } from "astro:content";

type ProductCardProps = {
   product: {
      id: string;
      body?: string;
      collection: "products";
      data: InferEntrySchema<"products">;
      rendered?: RenderedContent;
      filePath?: string;
   };
};

export default function ProductCard({ product }: ProductCardProps) {
   const { id } = product;
   const { title, description, mainImg } = product.data;
   return (
      <div className="flex flex-col gap-3 p-3 bg-white shadow-xl max-w-96">
         <img
            src={`/img/main/${mainImg}`}
            alt={`Imagen ${title}`}
            className="rounded-md w-full max-w-72 mx-auto"
         />
         <div className="p-3">
            <h4 className="text-lg font-semibold uppercase text-gray-800">
               {title}
            </h4>
            <p>{description}</p>
         </div>
         <a href={`/product/${id}`} className="mt-auto">
            <button className="bg-green-900 p-3 w-full rounded mt-2 hover:bg-green-800 duration-200 text-green-200 font-bold text-lg">
               Ver más
            </button>
         </a>
      </div>
   );
}
