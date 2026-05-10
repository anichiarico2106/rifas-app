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

        {/* PAQUETES */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-zinc-200">

          <div className="flex items-center gap-3 mb-10">

            <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-black font-black text-xl">
              🎟
            </div>

            <h2 className="text-5xl font-black text-[#111827]">
              Tickets
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {paquetes.map((item) => (

              <div
                key={item.tickets}
                onClick={() => setSeleccionado(item)}
                className={`border-2 transition-all duration-300 rounded-3xl p-8 cursor-pointer shadow-md hover:scale-[1.02] ${
                  seleccionado?.tickets === item.tickets
                    ? "bg-yellow-400 border-yellow-400 text-black"
                    : "border-zinc-800 hover:border-yellow-400 bg-[#0f172a] text-white"
                }`}
              >

                <h3 className="text-3xl font-black leading-tight">
                  {item.tickets} Ticket = {item.numeros} números
                </h3>

                <p
                  className={`mt-4 text-xl font-bold ${
                    seleccionado?.tickets === item.tickets
                      ? "text-black"
                      : "text-yellow-400"
                  }`}
                >
                  ${item.valor.toLocaleString("es-CO")}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span
                    className={`text-sm font-semibold ${
                      seleccionado?.tickets === item.tickets
                        ? "text-black"
                        : "text-zinc-400"
                    }`}
                  >
                    Participación aleatoria
                  </span>

                  <div
                    className={`w-3 h-3 rounded-full ${
                      seleccionado?.tickets === item.tickets
                        ? "bg-black"
                        : "bg-yellow-400"
                    }`}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* COMPRA */}
        <div className="bg-[#0f172a] rounded-3xl p-8 shadow-2xl border border-zinc-800 h-fit sticky top-10">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-2xl bg-yellow-400 flex items-center justify-center text-black font-black">
              💳
            </div>

            <h3 className="text-4xl font-black text-white">
              Tu Compra
            </h3>

          </div>

          <div className="border border-zinc-700 rounded-2xl overflow-hidden bg-[#111827]">

            <div className="flex justify-between p-5 border-b border-zinc-700 text-white">

              <span className="font-semibold text-lg">
                Cantidad
              </span>

              <span className="font-black text-xl text-yellow-400">
                {seleccionado ? seleccionado.tickets : 0}
              </span>

            </div>

            <div className="flex justify-between p-5 text-white text-2xl font-black">

              <span>
                Total
              </span>

              <span className="text-green-400">
                {seleccionado
                  ? `$${seleccionado.valor.toLocaleString("es-CO")}`
                  : "$0"}
              </span>

            </div>

          </div>

          <div className="mt-6 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-4">

            <p className="text-yellow-300 text-center font-semibold">
              🎉 Estás a un paso de participar
            </p>

          </div>

          <button className="w-full mt-8 bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-5 rounded-2xl font-black text-xl shadow-lg hover:scale-[1.02]">
            Pagar ahora →
          </button>

          <div className="mt-8 pt-6 border-t border-zinc-700">

            <p className="text-center text-zinc-400 font-medium">
              🔒 Pagos 100% seguros
            </p>

            <div className="flex justify-center gap-3 mt-4">

              <div className="bg-white rounded-xl px-4 py-2 text-black font-bold text-sm">
                PSE
              </div>

              <div className="bg-white rounded-xl px-4 py-2 text-black font-bold text-sm">
                VISA
              </div>

              <div className="bg-white rounded-xl px-4 py-2 text-black font-bold text-sm">
                Wompi
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}