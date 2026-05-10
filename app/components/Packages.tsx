"use client";

import { useState } from "react";

export default function Packages() {
    const paquetes = [
  {
    tickets: 1,
    numeros: 3,
    valor: 30000,
  },
  {
    tickets: 2,
    numeros: 6,
    valor: 60000,
  },
  {
    tickets: 3,
    numeros: 9,
    valor: 90000,
  },
  {
    tickets: 5,
    numeros: 15,
    valor: 150000,
  },
  {
    tickets: 10,
    numeros: 30,
    valor: 300000,
  },
];

const [seleccionado, setSeleccionado] = useState<any>(null);
  return (
    <section
      id="packages"
      className="max-w-7xl mx-auto px-6 pb-20"
    >

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm">

          <h2 className="text-5xl font-black text-[#111827] mb-10">
             Paquetes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {paquetes.map((item) => (

                <div
                key={item.tickets}
                onClick={() => setSeleccionado(item)}
                className={`border-2 transition-all rounded-3xl p-8 cursor-pointer ${
                    seleccionado?.tickets === item.tickets
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-zinc-200 hover:border-yellow-500 bg-[#fafafa]"
                }`}
                >
                <h3 className="text-3xl font-black">
                {item.tickets} Ticket = {item.numeros} números
                </h3>

                <p className="mt-3 text-lg font-semibold">
                ${item.valor.toLocaleString("es-CO")}
                </p>
              </div>

            ))}

          </div>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-200 h-fit sticky top-10">

          <h3 className="text-4xl font-black mb-6 text-black">
            Tu Compra
          </h3>

          <div className="border border-zinc-300 rounded-2xl overflow-hidden">

            <div className="flex justify-between p-5 border-b border-zinc-300 text-black">

              <span className="font-semibold">
                Cantidad
              </span>

              <span>
                {seleccionado ? seleccionado.tickets : 0}
              </span>

            </div>

            <div className="flex justify-between p-5 text-black text-2xl font-black">

              <span>
                Total
              </span>

              <span>
                {seleccionado
                    ? `$${seleccionado.valor.toLocaleString("es-CO")}`
                    : "$0"}
              </span>

            </div>

          </div>

          <button className="w-full mt-8 bg-[#111827] hover:bg-black transition-all text-white py-5 rounded-2xl font-black text-xl">
            Pagar ahora →
          </button>

          <p className="text-center text-zinc-500 mt-6 font-medium">
             Pagos 100% seguros
          </p>

        </div>

      </div>

    </section>
  );
}