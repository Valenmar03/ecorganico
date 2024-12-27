import React, { useState, useRef, useEffect } from "react";

type ProductsListProps = {
  children: React.ReactElement;
};

export default function ProductsList({ children }: ProductsListProps) {
  const [show, setShow] = useState(false);
  const [maxHeight, setMaxHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (show) {
        setMaxHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setMaxHeight("0px");
      }
    }
  }, [show]);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className={`w-full flex justify-center text-lg items-center gap-3 mt-3 bg-green-200 text-green-800 hover:bg-green-300 duration-300 p-3 `}
      >
        {!show ? "Ver Productos" : "Ocultar Productos"}
        <img
          src="/svg/ChevronDown.svg"
          alt="Chevron"
          className={`size-6 cursor-pointer duration-100 ${
            !show ? "-rotate-90" : "rotate-0"
          }`}
          loading="lazy"
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight }}
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
      >
        <div className={`p-4`}>{children}</div>
      </div>
    </>
  );
}
