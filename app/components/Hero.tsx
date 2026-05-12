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
      (ticket) =>
        ticket.estado?.toLowerCase().trim() === "vendido"
    ).length;

    const porcentajeCalculado = Number(
      ((vendidos / total) * 100).toFixed(1)
    );

    setPorcentaje(porcentajeCalculado);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid lg:grid-cols-2 gap-8 items-start">

        {/* IZQUIERDA */}
        <div>

          <div>

            <p className="text-yellow-500 font-black text-xl mb-3 uppercase tracking-[3px]">
              Sorteo Premium
            </p>

            <h1 className="text-6xl font-black text-[#111827] leading-tight">
              ¡GANA UNA
            </h1>

            <h1 className="text-6xl font-black text-[#111827] leading-tight">
              HONDA PCX 160!
            </h1>

          </div>

          <p className="text-2xl text-zinc-600 font-medium mt-5 leading-relaxed">
            Participa ahora y recibe números totalmente aleatorios.
          </p>

          <div className="bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl mt-8 border border-zinc-800">

            <img
              src="/sorteo.png"
              alt="Premio"
              className="w-full h-auto max-h-[500px] object-contain"
            />

          </div>

        </div>

        {/* DERECHA */}
        <div className="space-y-6">

          <div className="grid grid-cols-2 gap-4">

            {/* VALOR */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-zinc-200">

              <p className="text-zinc-500 font-semibold">
                Valor Ticket
              </p>

              <h2 className="text-5xl font-black text-green-600 mt-2">
                $30K
              </h2>

            </div>

            {/* SORTEO */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-zinc-200">

              <p className="text-zinc-500 font-semibold">
                Sorteo
              </p>

              <h2 className="text-5xl font-black text-yellow-500 mt-2">
                Hoy
              </h2>

            </div>

            {/* BARRA */}
            <div className="col-span-2 bg-white rounded-3xl p-6 shadow-lg border border-zinc-200">

              <div className="flex justify-between items-center mb-5">

                <h3 className="text-3xl font-black text-black">
                  Tickets vendidos
                </h3>

                <span className="text-yellow-500 font-black text-3xl">
                  {porcentaje}%
                </span>

              </div>

              <div className="w-full h-6 bg-zinc-200 rounded-full overflow-hidden">

                <div
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-700 rounded-full"
                  style={{
                    width: `${porcentaje}%`,
                  }}
                />

              </div>

            </div>

            {/* MODALIDAD */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-zinc-200">

              <p className="text-zinc-500 font-semibold">
                Modalidad
              </p>

              <h2 className="text-4xl font-black text-yellow-500 mt-2">
                Aleatorio
              </h2>

            </div>

            {/* PREMIO */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-zinc-200">

              <p className="text-zinc-500 font-semibold">
                Premio
              </p>

              <h2 className="text-3xl font-black text-green-600 mt-2">
                Honda + iPhone
              </h2>

            </div>

          </div>

          {/* PRECIO */}
          <div className="bg-[#0f172a] rounded-3xl p-10 text-center border border-zinc-800 shadow-2xl">

            <p className="text-yellow-400 font-black uppercase tracking-[4px] mb-4">
              Precio Oficial
            </p>

            <h2 className="text-7xl font-black text-yellow-400">
              $10.000
            </h2>

            <p className="text-white mt-3 text-xl font-semibold">
              POR NÚMERO
            </p>

            <button
              onClick={() => {
                window.dispatchEvent(
                  new Event("abrirCheckout")
                );
              }}
              className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-400 transition-all text-black font-black px-8 py-4 rounded-2xl text-xl"
            >
              Comprar ahora
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}