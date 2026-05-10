"use client";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";

export default function RifaDemo() {
  const [mostrarTickets, setMostrarTickets] = useState(false);

  const [numerosGenerados, setNumerosGenerados] = useState<string[]>([]);

  const [nombreCliente, setNombreCliente] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");

  const [cantidadTickets, setCantidadTickets] = useState<number>(1);

  const totalNumeros = cantidadTickets * 3;
  const valorCompra = cantidadTickets * 30000;

  const generarNumeros = () => {
    const nuevosNumeros: string[] = [];

    while (nuevosNumeros.length < totalNumeros) {
      const numero = String(
        Math.floor(Math.random() * 10000)
      ).padStart(4, "0");

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
    const { error } = await supabase
      .from("tickets")
      .select("*")
      .limit(1);

    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800">

          <img
            src="/sorteo.png"
            alt="Premio"
            className="w-full h-[340px] object-cover"
          />

          <div className="p-6 space-y-6">

            <div>

              <p className="text-sm uppercase tracking-[4px] text-green-400">
                Sorteo en vivo
              </p>

              <h1 className="text-4xl font-black mt-2 leading-tight">
                Gana una HONDA PCX 160 y un iPhone 17 Pro Max
              </h1>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">

                <p className="text-zinc-400 text-sm">
                  Valor Ticket
                </p>

                <h2 className="text-2xl font-black mt-1">
                  $30.000
                </h2>

                <p className="text-xs text-zinc-500 mt-1">
                  Incluye 3 números aleatorios
                </p>

              </div>

              <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">

                <p className="text-zinc-400 text-sm">
                  Sorteo
                </p>

                <h2 className="text-2xl font-black mt-1">
                  Hoy 9PM
                </h2>

              </div>

              <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">

                <p className="text-zinc-400 text-sm">
                  Modalidad
                </p>

                <h2 className="text-2xl font-black mt-1">
                  Aleatoria
                </h2>

              </div>

              <div className="bg-zinc-800 rounded-2xl p-5 border border-zinc-700">

                <p className="text-zinc-400 text-sm">
                  Premio
                </p>

                <h2 className="text-2xl font-black mt-1">
                  HONDA + iPhone
                </h2>

              </div>

            </div>

            <div className="space-y-4">

              <select
                value={cantidadTickets}
                onChange={(e) =>
                  setCantidadTickets(Number(e.target.value))
                }
                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none text-white"
              >

                <option value={1}>
                  1 Ticket = 3 números • $30.000
                </option>

                <option value={2}>
                  2 Tickets = 6 números • $60.000
                </option>

                <option value={3}>
                  3 Tickets = 9 números • $90.000
                </option>

                <option value={5}>
                  5 Tickets = 15 números • $150.000
                </option>

                <option value={10}>
                  10 Tickets = 30 números • $300.000
                </option>

              </select>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Nombre"
                  value={nombreCliente}
                  onChange={(e) =>
                    setNombreCliente(e.target.value)
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Apellido"
                  value={apellido}
                  onChange={(e) =>
                    setApellido(e.target.value)
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Cédula"
                  value={cedula}
                  onChange={(e) =>
                    setCedula(e.target.value)
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Teléfono"
                  value={telefono}
                  onChange={(e) =>
                    setTelefono(e.target.value)
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none"
                />

                <input
                  type="text"
                  placeholder="Dirección / Ciudad"
                  value={direccion}
                  onChange={(e) =>
                    setDireccion(e.target.value)
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none md:col-span-2"
                />

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={correo}
                  onChange={(e) =>
                    setCorreo(e.target.value)
                  }
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl p-4 outline-none md:col-span-2"
                />

              </div>

              <button
                onClick={generarNumeros}
                className="w-full bg-green-500 hover:bg-green-400 transition-all text-black font-black py-4 rounded-2xl text-lg shadow-lg"
              >
                Pagar ahora
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
                      <span className="text-zinc-500">
                        Cliente:
                      </span>{" "}
                      {nombreCliente} {apellido}
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Cédula:
                      </span>{" "}
                      {cedula}
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Teléfono:
                      </span>{" "}
                      {telefono}
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Dirección:
                      </span>{" "}
                      {direccion}
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Correo:
                      </span>{" "}
                      {correo}
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Tickets:
                      </span>{" "}
                      {cantidadTickets}
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Números:
                      </span>{" "}
                      {totalNumeros}
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Total:
                      </span>{" "}
                      ${valorCompra.toLocaleString("es-CO")}
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Orden:
                      </span>{" "}
                      #TK-2026-00128
                    </p>

                    <p>
                      <span className="text-zinc-500">
                        Estado:
                      </span>{" "}
                      Confirmado
                    </p>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}