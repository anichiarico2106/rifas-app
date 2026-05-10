export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid lg:grid-cols-2 gap-8 items-start">

        <div>

          <div>

            <h1 className="text-6xl font-black text-[#111827] leading-tight">
              ¡GANA UNA
            </h1>

            <h1 className="text-6xl font-black text-[#111827] leading-tight">
              HONDA PCX 160!
            </h1>

          </div>

          <p className="text-2xl text-zinc-600 font-medium mt-4">
            Participa ahora y recibe números totalmente aleatorios.
          </p>

          <div className="bg-[#111827] text-white rounded-3xl overflow-hidden shadow-xl mt-8">

            <img
              src="/sorteo.png"
              alt="Premio"
              className="w-full h-[500px] object-cover"
            />

          </div>

        </div>

        <div className="space-y-6">

          <div className="grid grid-cols-2 gap-4">

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
              <p className="text-zinc-500 font-semibold">
                Valor Ticket
              </p>

              <h2 className="text-4xl font-black text-green-600 mt-2">
                $30K
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
              <p className="text-zinc-500 font-semibold">
                Sorteo
              </p>

              <h2 className="text-3xl font-black text-[#111827] mt-2">
                Medellín
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
              <p className="text-zinc-500 font-semibold">
                Modalidad
              </p>

              <h2 className="text-3xl font-black text-[#111827] mt-2">
                Viernes
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-zinc-200">
              <p className="text-zinc-500 font-semibold">
                Premio
              </p>

              <h2 className="text-2xl font-black text-[#111827] mt-2">
                Honda + iPhone
              </h2>
            </div>

          </div>

          <div className="bg-[#111827] rounded-3xl p-10 text-center">

            <h2 className="text-6xl font-black text-yellow-400">
              $30.000
            </h2>

            <p className="text-white mt-2 text-xl font-semibold">
              POR BOLETA
            </p>

            <a
              href="#packages"
              className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-400 transition-all text-black font-black px-8 py-4 rounded-2xl text-xl"
            >
              Comprar ahora
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}