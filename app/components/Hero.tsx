"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Hero() {

  const [porcentaje, setPorcentaje] = useState(0);

  useEffect(() => {
    obtenerPorcentaje();
  }, []);

  async function obtenerPorcentaje() {

    const { data, error } = await supabase
      .from("tickets")
      .select("estado");

    if (error || !data) return;

    const total = data.length;

    const vendidos = data.filter(
      (ticket) => ticket.estado === "vendido"
    ).length;

    const porcentajeCalculado = Math.round(
      (vendidos / total) * 100
    );

    setPorcentaje(porcentajeCalculado);
  }

  return (

    <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 overflow-hidden">

      <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">

        {/* IZQUIERDA */}
        <div>

          <div>

            <p className="text-yellow-500 font-black uppercase tracking-[4px] md:tracking-[6px] text-lg md:text-2xl mb-4">
              Sorteo Premium
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
              ¡GANA UNA
            </h1>

            <h1 className="text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
              HONDA PCX 160!
            </h1>

          </div>

          <p className="text-xl md:text-2xl text-zinc-600 font-medium mt-4 leading-relaxed">
            Participa ahora y recibe números totalmente aleatorios.
          </p>

          <div className="bg-[#111827] text-white rounded-3xl overflow-hidden shadow-xl mt-8">

            <img
              src="/sorteo.png"
              alt="Premio"
              className="w-full h-auto object-cover"
            />

          </div>

        </div>

        {/* DERECHA */}
        <div className="space-y-4 md:space-y-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* VALOR */}
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-zinc-200 min-w-0">

              <p className="text-zinc-500 font-semibold text-lg md:text-xl">
                Valor Ticket
              </p>

              <h2 className="text-3xl md:text-5xl font-black text-green-600 mt-2 break-words">
                $30K
              </h2>

            </div>

            {/* SORTEO */}
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-zinc-200 min-w-0">

              <p className="text-zinc-500 font-semibold text-lg md:text-xl">
                Sorteo
              </p>

              <h2 className="text-3xl md:text-5xl font-black text-yellow-500 mt-2 break-words">
                Hoy
              </h2>

            </div>

            {/* BARRA */}
            <div className="col-span-1 sm:col-span-2 bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-zinc-200 min-w-0">

              <div className="flex justify-between items-center gap-4 mb-4">

                <h3 className="text-3xl md:text-5xl font-black text-black leading-none">
                  Tickets vendidos
                </h3>

                <span className="text-yellow-500 font-black text-3xl md:text-5xl whitespace-nowrap">
                  {porcentaje}%
                </span>

              </div>

              <div className="w-full h-5 md:h-6 bg-zinc-200 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-700 rounded-full"
                  style={{
                    width: `${porcentaje}%`,
                  }}
                />

              </div>

            </div>

            {/* MODALIDAD */}
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-zinc-200 min-w-0">

              <p className="text-zinc-500 font-semibold text-lg md:text-xl">
                Modalidad
              </p>

              <h2 className="text-3xl md:text-5xl font-black text-yellow-500 mt-2 break-words">
                Aleatorio
              </h2>

            </div>

            {/* PREMIO */}
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-zinc-200 min-w-0">

              <p className="text-zinc-500 font-semibold text-lg md:text-xl">
                Premio
              </p>

              <h2 className="text-3xl md:text-4xl font-black text-green-600 mt-2 break-words">
                Honda + iPhone
              </h2>

            </div>

          </div>

          {/* PRECIO */}
          <div className="bg-[#0f172a] rounded-3xl p-6 md:p-10 text-center shadow-xl">

            <p className="text-yellow-400 uppercase tracking-[4px] md:tracking-[6px] font-black text-lg md:text-2xl">
              Precio Oficial
            </p>

            <h2 className="text-5xl md:text-8xl font-black text-yellow-400 mt-4 break-words">
              $10.000
            </h2>

            <p className="text-white mt-2 text-xl md:text-3xl font-bold">
              POR NÚMERO
            </p>

            <button
              onClick={() => {
                window.dispatchEvent(
                  new Event("abrirCheckout")
                );
              }}
              className="inline-block mt-8 bg-yellow-400 hover:bg-yellow-300 transition-all text-black font-black px-8 md:px-12 py-4 md:py-5 rounded-2xl text-xl md:text-2xl shadow-lg hover:scale-[1.02]"
            >
              Comprar ahora
            </button>

          </div>

        </div>

      </div>

    </section>

  );
}