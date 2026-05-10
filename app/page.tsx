"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "./lib/supabase";

export default function RifaDemo() {
  const [mostrarTickets, setMostrarTickets] = useState(false);
  const [numerosGenerados, setNumerosGenerados] = useState<string[]>([]);
  const [nombreCliente, setNombreCliente] = useState("");
  const [cantidadTickets, setCantidadTickets] = useState<number>(1);
  const [tickets, setTickets] = useState<any[]>([]);
  const vendidos = useMemo(
    () => [
      "0007",
      "0012",
      "0044",
      "0108",
      "0221",
      "0345",
      "0510",
      "0733",
      "0888",
      "0999",
    ],
    []
  );



  const totalNumeros = cantidadTickets * 3;
  const valorCompra = cantidadTickets * 30000;

  const generarNumeros = () => {
    const nuevosNumeros: string[] = [];

    while (nuevosNumeros.length < totalNumeros) {
      const numero = String(Math.floor(Math.random() * 10000)).padStart(
        4,
        "0"
      );

      if (!nuevosNumeros.includes(numero)) {
        nuevosNumeros.push(numero);
      }
    }

    setNumerosGenerados(nuevosNumeros);
    setMostrarTickets(true);
  };

  useEffect(() => {
  obtenerTickets();
  }, []);

  const obtenerTickets = async () => {
    const { data, error } = await supabase
      .from("tickets")
      .select("*")
      .limit(100);

    if (error) {
      console.log(error);
    } else {
      setTickets(data);
    }
};
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">
              <img
                src="/sorteo.png"
                alt="Premio"
                className="w-full h-[320px] object-contain bg-black"
              />

              <div className="p-6 space-y-5">
                <div>
                  <p className="text-sm uppercase tracking-[4px] text-green-400">
                    Sorteo en vivo
                  </p>

                  <h1 className="text-4xl font-black mt-2">
                    Gana una HONDA PCX 160 y un iPhone 17 pro max                  </h1>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-zinc-800 rounded-2xl p-4">
                    <p className="text-zinc-400 text-sm">Valor Ticket</p>
                    <h2 className="text-2xl font-bold">$30K</h2>
                    <p className="text-xs text-zinc-500 mt-1">
                      3 números incluidos
                    </p>
                  </div>

                  <div className="bg-zinc-800 rounded-2xl p-4">
                    <p className="text-zinc-400 text-sm">Vendidos</p>
                    <h2 className="text-2xl font-bold">428 / 3.333</h2>
                  </div>

                  <div className="bg-zinc-800 rounded-2xl p-4">
                    <p className="text-zinc-400 text-sm">Quedan</p>
                    <h2 className="text-2xl font-bold">2.905</h2>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-zinc-400">Progreso</span>
                    <span>12%</span>
                  </div>

                  <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[12%] rounded-full"></div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
                  <p className="text-green-300 text-sm font-semibold">
                    🔥 Últimos movimientos
                  </p>

                  <div className="mt-3 space-y-2 text-sm text-zinc-300">
                    <p>
                      {nombreCliente || "Cliente"} compró {cantidadTickets} ticket
                      {cantidadTickets > 1 ? "s" : ""} ({totalNumeros} números)
                    </p>

                    <p>Kevin compró 2 tickets (6 números)</p>
                    <p>Laura compró 4 tickets (12 números)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    value={nombreCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
                  />

                  <select
                    value={cantidadTickets}
                    onChange={(e) => setCantidadTickets(Number(e.target.value))}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none text-white"
                  >
                    <option value={1}>1 Ticket = 3 números • $30.000</option>
                    <option value={2}>2 Tickets = 6 números • $60.000</option>
                    <option value={3}>3 Tickets = 9 números • $90.000</option>
                    <option value={5}>5 Tickets = 15 números • $150.000</option>
                    <option value={10}>10 Tickets = 30 números • $300.000</option>
                  </select>

                  <button
                    onClick={generarNumeros}
                    className="w-full bg-green-500 hover:bg-green-400 transition-all text-black font-black py-4 rounded-2xl text-lg shadow-lg"
                  >
                    Comprar por WhatsApp
                  </button>

                  {mostrarTickets && (
                    <div className="bg-zinc-950 border border-green-500/30 rounded-3xl p-5 mt-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-green-400 text-sm uppercase tracking-[3px]">
                            Compra confirmada
                          </p>

                          <h3 className="text-2xl font-black mt-1">
                            Tus números 🎟️
                          </h3>
                        </div>

                        <div className="bg-green-500 text-black px-3 py-1 rounded-xl font-bold text-sm">
                          PAGADO
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {numerosGenerados.map((numero, index) => (
                          <div
                            key={`${numero}-${index}`}
                            className="bg-green-500/10 border border-green-500 rounded-2xl h-20 flex items-center justify-center text-2xl font-black text-green-300"
                          >
                            {numero}
                          </div>
                        ))}
                      </div>

                      <div className="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 space-y-2 text-sm text-zinc-300">
                        <p>
                          <span className="text-zinc-500">Cliente:</span>{" "}
                          {nombreCliente || "Cliente"}
                        </p>

                        <p>
                          <span className="text-zinc-500">Tickets:</span>{" "}
                          {cantidadTickets}
                        </p>

                        <p>
                          <span className="text-zinc-500">Números:</span>{" "}
                          {totalNumeros}
                        </p>

                        <p>
                          <span className="text-zinc-500">Total:</span>{" "}
                          ${valorCompra.toLocaleString("es-CO")}
                        </p>

                        <p>
                          <span className="text-zinc-500">Orden:</span>{" "}
                          #TK-2026-00128
                        </p>

                        <p>
                          <span className="text-zinc-500">Método:</span>{" "}
                          Nequi
                        </p>

                        <p>
                          <span className="text-zinc-500">Estado:</span>{" "}
                          Confirmado
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[4px] text-zinc-400">
                  Tickets en tiempo real
                </p>

                <h2 className="text-3xl font-black mt-2">
                  Elige tu suerte 🎟️
                </h2>
              </div>

              <div className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold">
                LIVE
              </div>
            </div>

            <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center font-bold text-sm border transition-all
                    ${
                      ticket.estado === "vendido"
                        ? "bg-red-500/20 border-red-500 text-red-300"
                        : ticket.estado === "reservado"
                        ? "bg-yellow-500/20 border-yellow-500 text-yellow-300"
                        : "bg-zinc-800 border-zinc-700 hover:border-green-400 hover:bg-green-500/10"
                    }
                  `}
                >
                  {ticket.numero}
                </div>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-zinc-800 rounded-2xl p-4 border border-zinc-700">
                <p className="text-zinc-400 text-sm">Sorteo</p>
                <h3 className="font-bold text-xl mt-1">Hoy 9PM</h3>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4 border border-zinc-700">
                <p className="text-zinc-400 text-sm">Método</p>
                <h3 className="font-bold text-xl mt-1">Aleatorio</h3>
              </div>

              <div className="bg-zinc-800 rounded-2xl p-4 border border-zinc-700">
                <p className="text-zinc-400 text-sm">Premio</p>
                <h3 className="font-bold text-xl mt-1">PS5</h3>
              </div>
            </div>

            <div className="mt-8 bg-zinc-800 rounded-3xl p-6 border border-zinc-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-400 text-sm">Ganador anterior</p>
                  <h2 className="text-3xl font-black mt-1">#0733</h2>
                </div>

                <div className="text-right">
                  <p className="text-zinc-400 text-sm">Cliente</p>
                  <h2 className="text-2xl font-bold">Carlos M.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}