import type { InferEntrySchema, RenderedContent } from "astro:content";
import { useState } from "react";

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
   const [openNav, setOpenNav] = useState(false);

   return (
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
         <div className="container mx-auto flex flex-col md:flex-row justify-between md:justify-around items-center py-4 px-6">
            {/* Logo */}
            <nav className="flex flex-col gap-5 md:flex-row justify-between md:items-center w-full">
               <div className="flex justify-between">
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
                     onClick={() => setOpenNav(!openNav)}
                  >
                     <img src="/svg/Menu.svg" alt="Menu svg" className="w-8" />
                  </button>
               </div>
               <div
                  className={`${
                     openNav ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  } transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible md:max-h-none md:opacity-100 md:flex md:gap-10 md:items-center w-full justify-center text-xl`}
               >
                  <ul className="flex flex-col gap-3 md:flex-row md:gap-10 md:text-lg text-gray-700 mb-5 md:mb-0">
                     <li>
                        <a href="/" className="hover:text-green-600">
                           Inicio
                        </a>
                     </li>
                     <li>DiatomiD</li>
                     <li>Nutrigea</li>
                  </ul>
                  <a
                     href={whatsappLink}
                     target="_blank"
                     className="bg-green-200 md:hidden justify-center text-green-900 px-4 md:px-10 py-2 rounded hover:bg-green-300 duration-200 flex gap-2 items-center"
                  >
                     <img
                        src="/svg/Wpp.svg"
                        alt="WhatsApp Svg"
                        className="w-8"
                     />
                     WhatsApp
                  </a>
               </div>
               <a
                  href={whatsappLink}
                  target="_blank"
                  className="bg-green-200 hidden md:flex text-green-900 px-4 md:px-10 py-2 rounded hover:bg-green-300 duration-200 gap-2 items-center justify-center"
               >
                  <img src="/svg/Wpp.svg" alt="WhatsApp Svg" className="w-8" />
                  WhatsApp
               </a>
            </nav>
         </div>
      </header>
   );
}
