"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Packages() {

  const [abierto, setAbierto] = useState(false);
    useEffect(() => {

    const abrir = () => {
      setAbierto(true);
    };

    window.addEventListener(
      "abrirCheckout",
      abrir
    );

    return () => {
      window.removeEventListener(
        "abrirCheckout",
        abrir
      );
    };

  }, []);

  const paquetes = [
    {
      tickets: 1,
      numeros: 3,
      valor: 30000,
      nombre: "Lucky Pass",
    },
    {
      tickets: 2,
      numeros: 6,
      valor: 60000,
      nombre: "Golden Pass",
    },
    {
      tickets: 3,
      numeros: 9,
      valor: 90000,
      nombre: "VIP Pass",
    },
    {
      tickets: 5,
      numeros: 15,
      valor: 150000,
      nombre: "Mega Pass",
    },
    {
      tickets: 10,
      numeros: 30,
      valor: 300000,
      nombre: "Elite Pass",
    },
  ];

  const [seleccionado, setSeleccionado] = useState<any>(null);

  const [mostrarModal, setMostrarModal] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [cedula, setCedula] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");

  const [errorFormulario, setErrorFormulario] =
    useState("");

  async function guardarCompra() {

    if (!seleccionado) {
      setErrorFormulario(
        "Selecciona un paquete"
      );

      return;
    }

    if (
      !nombre ||
      !apellido ||
      !cedula ||
      !telefono ||
      !direccion ||
      !correo
    ) {
      setErrorFormulario(
        "Completa todos los campos"
      );

      return;
    }

    const response = await fetch(
      "/api/comprar",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          nombre,
          apellido,
          cedula,
          telefono,
          direccion,
          correo,
          paquete: seleccionado,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {

      setErrorFormulario(
        data.error ||
          "Error guardando compra"
      );

      return;
    }

    setMostrarModal(false);
  }

  return (

    <>



      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/70 z-40 transition-all duration-300 ${
          abierto
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setAbierto(false)}
      />

      {/* PANEL */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-[700px] lg:w-[900px] bg-[#0f172a] z-50 shadow-2xl transition-all duration-500 overflow-y-auto ${
          abierto
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="sticky top-0 bg-[#0f172a] border-b border-zinc-800 p-4 md:p-6 flex justify-between items-center z-20">

          <div>

            <p className="text-yellow-400 font-bold uppercase tracking-[3px]">
              Checkout
            </p>

            <h2 className="text-2xl md:text-4xl font-black text-white">
              Elige tu pase
            </h2>

          </div>

          <button
            onClick={() => setAbierto(false)}
            className="text-white text-2xl md:text-4xl"
          >
            ×
          </button>

        </div>

        {/* CONTENIDO */}
        <div className="p-4 md:p-6 grid lg:grid-cols-2 gap-4 md:p-6">

          {/* PAQUETES */}
          <div className="space-y-4">

            {paquetes.map((item) => (

              <div
                key={item.tickets}
                onClick={() => setSeleccionado(item)}
                className={`rounded-3xl p-5 cursor-pointer border-2 transition-all duration-300 shadow-xl ${
                  seleccionado?.tickets ===
                  item.tickets
                    ? "bg-yellow-400 border-yellow-400 text-black scale-[1.02]"
                    : "bg-[#111827] border-zinc-700 text-white hover:border-yellow-400"
                }`}
              >

                <div className="flex items-center gap-4">

                  {/* PLACEHOLDER */}
                  <img
                    src="/sorteo.png"
                    alt="ticket"
                    className="w-20 h-20 rounded-2xl object-cover"
                  />

                  <div className="flex-1">

                    <h3 className="text-lg md:text-2xl font-black leading-tight">
                      {item.nombre}
                    </h3>

                    <p className="font-semibold mt-1">
                      {item.numeros} números
                    </p>

                    <p
                      className={`mt-3 text-lg md:text-2xl font-black ${
                        seleccionado?.tickets ===
                        item.tickets
                          ? "text-black"
                          : "text-yellow-400"
                      }`}
                    >
                      $
                      {item.valor.toLocaleString(
                        "es-CO"
                      )}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* RESUMEN */}
          <div className="bg-[#111827] rounded-3xl p-4 md:p-6 border border-zinc-700 h-fit sticky top-28">

            <h3 className="text-2xl md:text-4xl font-black text-white mb-8">
              Tu compra
            </h3>

            <div className="bg-[#0f172a] rounded-2xl border border-zinc-700 overflow-hidden">

              <div className="flex justify-between p-5 border-b border-zinc-700 text-white">

                <span>
                  Pase
                </span>

                <span className="font-bold text-yellow-400">
                  {seleccionado
                    ? seleccionado.nombre
                    : "-"}
                </span>

              </div>

              <div className="flex justify-between p-5 border-b border-zinc-700 text-white">

                <span>
                  Números
                </span>

                <span className="font-bold">
                  {seleccionado
                    ? seleccionado.numeros
                    : 0}
                </span>

              </div>

              <div className="flex justify-between p-5 text-white text-lg md:text-2xl font-black">

                <span>
                  Total
                </span>

                <span className="text-green-400">
                  {seleccionado
                    ? `$${seleccionado.valor.toLocaleString(
                        "es-CO"
                      )}`
                    : "$0"}
                </span>

              </div>

            </div>

            <button
              onClick={() =>
                setMostrarModal(true)
              }
              className="w-full mt-8 bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-5 rounded-2xl font-black text-xl"
            >
              Continuar →
            </button>

          </div>

        </div>

      </div>

      {/* MODAL */}
      {mostrarModal && (

        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 md:p-6">

          <div className="bg-white rounded-3xl p-5 md:p-8 w-full max-w-2xl w-full">

            <h2 className="text-5xl font-black text-black mb-8">
              Completa tus datos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                placeholder="Nombre"
                value={nombre}
                onChange={(e) =>
                  setNombre(e.target.value)
                }
                className="border border-zinc-300 bg-zinc-50 rounded-2xl p-4 text-black placeholder:text-zinc-500"
              />

              <input
                placeholder="Apellido"
                value={apellido}
                onChange={(e) =>
                  setApellido(e.target.value)
                }
                className="border border-zinc-300 bg-zinc-50 rounded-2xl p-4 text-black placeholder:text-zinc-500"
              />

              <input
                placeholder="Cédula"
                value={cedula}
                onChange={(e) =>
                  setCedula(e.target.value)
                }
                className="border border-zinc-300 bg-zinc-50 rounded-2xl p-4 text-black placeholder:text-zinc-500"
              />

              <input
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) =>
                  setTelefono(e.target.value)
                }
                className="border border-zinc-300 bg-zinc-50 rounded-2xl p-4 text-black placeholder:text-zinc-500"
              />

              <input
                placeholder="Dirección / Ciudad"
                value={direccion}
                onChange={(e) =>
                  setDireccion(e.target.value)
                }
                className="border border-zinc-300 bg-zinc-50 rounded-2xl p-4 text-black placeholder:text-zinc-500 md:col-span-2"
              />

              <input
                placeholder="Correo electrónico"
                value={correo}
                onChange={(e) =>
                  setCorreo(e.target.value)
                }
                className="border border-zinc-300 bg-zinc-50 rounded-2xl p-4 text-black placeholder:text-zinc-500 md:col-span-2"
              />

            </div>

            {errorFormulario && (

              <div className="mt-6 bg-red-100 border border-red-300 text-red-600 rounded-2xl p-4 text-center font-semibold">

                {errorFormulario}

              </div>

            )}

            <button
              onClick={guardarCompra}
              className="w-full mt-8 bg-yellow-400 hover:bg-yellow-300 transition-all text-black py-5 rounded-2xl font-black text-xl"
            >
              Continuar a Wompi →
            </button>

            <button
              onClick={() =>
                setMostrarModal(false)
              }
              className="w-full mt-4 text-zinc-500 font-semibold"
            >
              Cancelar
            </button>

          </div>

        </div>

      )}

    </>

  );
}