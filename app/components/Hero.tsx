export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10 items-start">

      <div>

        <div className="bg-zinc-900 text-white rounded-full px-6 py-4 inline-flex items-center gap-2 font-bold">
          🔥 Juega este Viernes por la de Medellín
        </div>

        <h1 className="text-6xl font-black leading-tight mt-8 text-zinc-900">
          ¡GANA UNA
          <span className="text-yellow-500">
            {" "}HONDA PCX 160!
          </span>
        </h1>

        <p className="text-zinc-600 text-xl mt-6">
          Participa ahora y recibe números totalmente aleatorios.
        </p>

        <img
          src="/sorteo.png"
          alt="Premio"
          className="rounded-3xl mt-8 shadow-2xl"
        />

      </div>

      <div className="space-y-6">

        <div className="bg-white rounded-3xl p-8 shadow-lg border border-zinc-200">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-3xl">
              🏆
            </div>

            <div>
              <h2 className="text-3xl font-black text-zinc-900">
                Premio Mayor
              </h2>

              <p className="text-zinc-500 mt-2">
                Honda PCX 160 + iPhone 17 Pro Max
              </p>
            </div>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white rounded-3xl p-6 shadow border border-zinc-200">
            <h3 className="text-5xl font-black text-green-600">
              70%
            </h3>

            <p className="text-zinc-500 mt-2">
              Tickets vendidos
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow border border-zinc-200">
            <h3 className="text-5xl font-black text-yellow-500">
              $30K
            </h3>

            <p className="text-zinc-500 mt-2">
              Valor por ticket
            </p>
          </div>

        </div>

        <div className="bg-white rounded-3xl p-8 shadow border border-zinc-200">

          <div className="flex justify-between mb-3 font-bold">
            <span>Números vendidos</span>
            <span>70%</span>
          </div>

          <div className="w-full bg-zinc-200 rounded-full h-5 overflow-hidden">

            <div className="bg-yellow-400 h-full w-[70%] rounded-full"></div>

          </div>

        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 text-center">

          <h2 className="text-6xl font-black text-yellow-400">
            $30.000
          </h2>

          <p className="text-white font-bold mt-2">
            POR BOLETA
          </p>

          <a
            href="#packages"
            className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-300 transition-all text-black px-8 py-4 rounded-2xl font-black text-lg"
          >
            Comprar ahora
          </a>

        </div>

      </div>

    </section>
  );
}