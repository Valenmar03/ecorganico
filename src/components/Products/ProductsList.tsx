import React, { useState } from "react";

type ProductsListProps = {
   children: React.ReactElement;
};
export default function ProductsList({ children }: ProductsListProps) {
    const [show, setShow] = useState(false)
   return (
      <>

         <div className={`${!show && 'hidden'}`}>{children}</div>
         <button
            onClick={() => setShow(!show)}
         >Ver Más </button>
      </>
   );
}
