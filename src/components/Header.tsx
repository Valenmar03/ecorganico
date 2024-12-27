import { useState, useRef, useEffect } from "react";

export default function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
   const [menuHeight, setMenuHeight] = useState("0px");
   const navRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (menuOpen) {
         setMenuHeight(`${navRef.current!.scrollHeight}px`);
      } else {
         setMenuHeight("0px");
      }
   }, [menuOpen]);

   return (
      <header className="bg-white shadow-md fixed top-0 w-full z-50">
         <div className="container mx-auto flex flex-col md:flex-row justify-between md:justify-around  items-center py-4 px-6">
            <div className="flex justify-between items-center w-full md:block md:w-fit">
               <a href="/" className="text-2xl font-bold text-green-600">
                  <img
                     src="/LogoTexto.png"
                     alt="Logo Ecorganico"
                     className="w-44 hidden md:block"
                  />
                  <img
                     src="/Logo.png"
                     alt="Logo Ecorganico"
                     className="w-14 md:hidden"
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
               ref={navRef}
               style={{ maxHeight: menuHeight }}
               className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out w-full mt-5 md:mt-0`}
            >
               <ul className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-gray-600 text-xl md:text-lg">
                  <li>
                     <a
                        href="#inicio"
                        className="hover:text-green-500 duration-200 p-3"
                     >
                        Inicio
                     </a>
                  </li>
                  <li>
                     <a
                        href="#nosotros"
                        className="hover:text-green-500 duration-200 p-3"
                     >
                        Nosotros
                     </a>
                  </li>
                  <li>
                     <a
                        href="#productos"
                        className="hover:text-green-500 duration-200 p-3"
                     >
                        Productos
                     </a>
                  </li>
                  <li>
                     <a
                        href="#contacto"
                        className="hover:text-green-500 duration-200 p-3"
                     >
                        Contacto
                     </a>
                  </li>
               </ul>
            </nav>

            <nav className="hidden md:block">
               <ul className="flex space-x-6 text-gray-600 text-lg">
                  <li>
                     <a
                        href="#inicio"
                        className="hover:text-green-500 duration-200"
                     >
                        Inicio
                     </a>
                  </li>
                  <li>
                     <a
                        href="#nosotros"
                        className="hover:text-green-500 duration-200"
                     >
                        Nosotros
                     </a>
                  </li>
                  <li>
                     <a
                        href="#productos"
                        className="hover:text-green-500 duration-200"
                     >
                        Productos
                     </a>
                  </li>
                  <li>
                     <a
                        href="#contacto"
                        className="hover:text-green-500 duration-200"
                     >
                        Contacto
                     </a>
                  </li>
               </ul>
            </nav>

            <a
               href="#contacto"
               className="bg-green-200 text-green-900 px-4 py-2 rounded hover:bg-green-300 duration-200 hidden md:block"
            >
               Solicitá Información
            </a>
         </div>
      </header>
   );
}
