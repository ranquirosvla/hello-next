"use client";

import React, { useState } from "react";

export default function Contador({ initialValue, onIncrement }) {
  const [contador, setContador] = useState(initialValue);

  const incrementarContador = () => {
    const newValue = contador + 1;
    setContador(newValue);
  };

  return (
    <div className="p-4 text-center">
      <p>Contador: {contador}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={incrementarContador}
      >
        Incrementar
      </button>
    </div>
  );
}