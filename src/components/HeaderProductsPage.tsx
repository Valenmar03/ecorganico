import type { InferEntrySchema, RenderedContent } from "astro:content";
import { useState, useRef, useEffect } from "react";

type HeaderProductsPageProps = {
   products: {
      id: string;
      body?: string;
      collection: "products";
      data: InferEntrySchema<"products">;
      rendered?: RenderedContent;
   }[];
};

export default function HeaderProductsPage({
   products,
}: HeaderProductsPageProps) {
   const phoneNumber = "+5491159606813";
   const defaultMessage = encodeURIComponent(
      "Hola! Me gustaría recibir más información sobre sus productos."
   );
   const whatsappLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
   const [menuOpen, setMenuOpen] = useState(false);
   const [summaryPressed, setSummaryPressed] = useState(false);
   const [menuHeight, setMenuHeight] = useState("0px");
   const navRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (menuOpen) {
         setMenuHeight(`h-screen`);
      } else {
         setMenuHeight("h-0");
      }
   }, [menuOpen, summaryPressed]);

   return (
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
         <div className="container mx-auto flex flex-col md:flex-row justify-between md:justify-around items-center py-4 px-6">
            {/* Logo */}
            <div className="flex justify-between items-center w-full md:block md:w-fit">
               <a href="/" className="text-2xl font-bold text-green-600">
                  <img
                     src="/LogoTexto.png"
                     alt="Logo Ecorganico"
                     className="w-44 hidden md:block"
                     loading="lazy"
                  />
                  <img
                     src="/Logo.png"
                     alt="Logo Ecorganico"
                     className="w-14 md:hidden"
                     loading="lazy"
                  />
               </a>
               <button
                  className="md:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  <img src="/svg/Menu.svg" alt="Menu svg" className="w-8" />
               </button>
            </div>

            <nav
               className={`md:hidden overflow-hidden ${
                  menuOpen ? "h-screen" : "h-0"
               } transition-all duration-500 ease-in-out w-full mt-5 md:mt-0`}
            >
               <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-gray-600 text-2xl">
                  <li>
                     <a
                        href="/"
                        className="hover:text-green-500 duration-200 p-3"
                     >
                        Inicio
                     </a>
                  </li>
                  <li>
                     <details
                        className="p-3 group"
                        onClick={() => setSummaryPressed(!summaryPressed)}
                     >
                        <summary className="hover:text-green-500 list-none flex justify-between">
                           DiatomiD
                           <img
                              src="/svg/ChevronDown.svg"
                              alt="Chevron Icon"
                              className="-rotate-90 group-open:rotate-0 duration-200"
                           />
                        </summary>
                        <ul className="text-lg ml-5">
                           {products
                              .filter(
                                 (product) =>
                                    product.data.supplier === "DiatomiD" &&
                                    product
                              )
                              .map((product) => (
                                 <li
                                    key={product.id}
                                    className="hover:text-green-500"
                                 >
                                    <a href={`/product/${product.id}`}>
                                       {product.data.title}
                                    </a>
                                 </li>
                              ))}
                        </ul>
                     </details>
                  </li>
                  <li>
                     <details
                        className="p-3 group"
                        onClick={() => setSummaryPressed(!summaryPressed)}
                     >
                        <summary className="hover:text-green-500 list-none flex justify-between">
                           Nutrigea
                           <img
                              src="/svg/ChevronDown.svg"
                              alt="Chevron Icon"
                              className="-rotate-90 group-open:rotate-0 duration-200"
                           />
                        </summary>
                        <ul className="text-lg ml-5">
                           {products
                              .filter(
                                 (product) =>
                                    product.data.supplier === "DiatomiD" &&
                                    product
                              )
                              .map((product) => (
                                 <li
                                    key={product.id}
                                    className="hover:text-green-500"
                                 >
                                    <a href={`/product/${product.id}`}>
                                       {product.data.title}
                                    </a>
                                 </li>
                              ))}
                        </ul>
                     </details>
                  </li>
                  <li>
                     <a
                        href={whatsappLink}
                        target="_blank"
                        className="bg-green-200 text-green-900 px-4 py-2 rounded hover:bg-green-300 duration-200 flex gap-2 items-center"
                     >
                        <img
                           src="/svg/Wpp.svg"
                           alt="WhatsApp Svg"
                           className="w-8"
                        />
                        WhatsApp
                     </a>
                  </li>
               </ul>
            </nav>

            <nav className="hidden md:block">
               <ul className="flex space-x-6 text-gray-600 text-lg">
                  <li>
                     <a href="/" className="hover:text-green-500 duration-200">
                        Inicio
                     </a>
                  </li>
                  <li>
                     <a
                        href="#nosotros"
                        className="hover:text-green-500 duration-200 p-3"
                     >
                        Diatomid
                     </a>
                  </li>
                  <li>
                     <a
                        href="#productos"
                        className="hover:text-green-500 duration-200 p-3"
                     >
                        Nutrigea
                     </a>
                  </li>
               </ul>
            </nav>

            {/* WhatsApp Link */}
            <a
               href={whatsappLink}
               target="_blank"
               className="bg-green-200 text-green-900 px-4 py-2 rounded hover:bg-green-300 duration-200 hidden md:flex gap-2 items-center"
            >
               <img src="/svg/Wpp.svg" alt="WhatsApp Svg" className="w-8" />
               WhatsApp
            </a>
         </div>
      </header>
   );
}
