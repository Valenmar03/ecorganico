import type { InferEntrySchema, RenderedContent } from "astro:content";
import { useState } from "react";

type DropdownNavProps = {
   products: {
      id: string;
      body?: string;
      collection: "products";
      data: InferEntrySchema<"products">;
      rendered?: RenderedContent;
   }[];
   supplier: string;
};

export default function DropdownNav({ supplier, products }: DropdownNavProps) {
   const [openDropdown, setOpenDropdown] = useState(false);
   return (
      <li className="relative">
         <button
            className="flex items-center gap-3 group justify-between w-full hover:text-green-600"
            onClick={() => {
                setOpenDropdown(!openDropdown);
            }}
         >
            {supplier}
            <span
               className={`text-xl ${
                openDropdown ? "-rotate-90" : "rotate-0"
               } duration-200`}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 9l6 6l6 -6" />
               </svg>
            </span>
         </button>
         <div
            className={`bg-gray-200 rounded md:absolute md:left-0 md:w-72 md:shadow-lg md:z-50 transition-all duration-300 ease-in-out ${
                openDropdown
                  ? "max-h-screen opacity-100 mt-5 p-3"
                  : "max-h-0 opacity-0"
            } overflow-hidden`}
         >
            <ul className="space-y-2">
               {products
                  .filter((product) => product.data.supplier === supplier)
                  .map((product) => (
                     <li key={product.id}>
                        <a
                           href={`/product/${product.id}`}
                           className="hover:text-green-600"
                        >
                           {product.data.title}
                        </a>
                     </li>
                  ))}
            </ul>
         </div>
      </li>
   );
}
