import ProductCard from "./ProductCard.astro";
import { useState } from "react";

type ProductsProps = {
   products: {
     id: string;
     data: {
       title: string;
       description: string;
       mainImg: string;
     };
   }[];
 };
export default function Products({ products }: ProductsProps) {
   const [diatomidOpen, setDiaotmidOpen] = useState(false);
   const [nutrigeaOpen, setNutrigeaOpen] = useState(false);

   if (!products || products.length === 0) {
      return <p>No hay productos disponibles</p>;
    }
   return (
      <div className="flex">
         <div className="py-14">
            <div className="w-full mx-auto space-y-5 mb-12">
               <h2 className="text-6xl uppercase font-bold text-gray-800 text-center">
                  DiatomiD
               </h2>
               <p className="text-lg prose text-gray-800 text-center mx-auto">
                  <strong className="text-green-600">Diatomid</strong> es un
                  producto natural elaborado a partir de tierra de diatomeas,
                  compuesto por los restos fosilizados de algas unicelulares
                  llamadas diatomeas. Este mineral se utiliza principalmente
                  como{" "}
                  <strong className="text-green-800">
                     insecticida ecológico
                  </strong>{" "}
                  y{" "}
                  <strong className="text-green-800">
                     fertilizante natural
                  </strong>
                  . Al ser un producto natural y no tóxico, Diatomid es{" "}
                  <strong className="text-green-600">seguro</strong> para{" "}
                  <strong className="text-green-600">
                     humanos, animales y plantas
                  </strong>
                  . Sin embargo, es importante seguir las instrucciones de uso
                  proporcionadas por el fabricante para garantizar su eficacia y
                  seguridad.
               </p>
            </div>
            <button
          className="mx-auto flex items-center justify-center space-x-2"
          onClick={() => setDiaotmidOpen(!diatomidOpen)}
        >
          <img
            src={`/svg/${!diatomidOpen ? "ChevronDown" : "ChevronUp"}.svg`}
            alt="Chevron"
          />
          <span>{diatomidOpen ? "Ver menos" : "Ver más"}</span>
        </button>
        {diatomidOpen && (
          <div className="flex flex-wrap gap-2 w-4/5 mx-auto justify-center">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}
         </div>
         <div className="bg-white py-14">
            <div className="w-full mx-auto space-y-5 mb-12">
               <h2 className="text-6xl uppercase font-bold text-gray-800 text-center">
                  Nutrigea
               </h2>
               <p className="text-lg prose text-gray-800 text-center mx-auto">
                  Nutrigea es un{" "}
                  <strong className="text-green-600">
                     fertilizante ecológico
                  </strong>{" "}
                  diseñado para mejorar el equilibrio natural del suelo y
                  promover un{" "}
                  <strong className="text-green-800">
                     crecimiento sostenible y saludable en los cultivos
                  </strong>
                  . Este producto es el resultado de un profundo compromiso con
                  la agricultura responsable, que busca respetar y preservar el
                  medio ambiente mientras optimiza la productividad agrícola. Al
                  utilizar componentes derivados de fuentes sostenibles, este
                  fertilizante no solo alimenta a las plantas, sino que también{" "}
                  <strong className="text-green-600">
                     fortalece la salud del ecosistema agrícola
                  </strong>
                  , incluyendo el suelo, el agua y la biodiversidad circundante.
               </p>
            </div>
            <button
          className="mx-auto flex items-center justify-center space-x-2"
          onClick={() => setNutrigeaOpen(!nutrigeaOpen)}
        >
          <img
            src={`/svg/${!nutrigeaOpen ? "ChevronDown" : "ChevronUp"}.svg`}
            alt="Chevron"
          />
          <span>{nutrigeaOpen ? "Ver menos" : "Ver más"}</span>
        </button>
            {nutrigeaOpen && (
               <div className="flex flex-wrap gap-2 w-4/5 mx-auto justify-center">
                  {products.map((product) => (
                  <ProductCard
                     key={product.id}
                     product={product}
                  />
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}
