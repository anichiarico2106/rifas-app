export default function Packages() {
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

            {[3, 5, 10, 20, 50].map((item) => (

              <div
                key={item}
                className="border-2 border-zinc-200 hover:border-yellow-500 transition-all rounded-3xl p-8 cursor-pointer bg-[#fafafa]"
              >

                <h3 className="text-5xl font-black text-black">
                  {item}
                </h3>

                <p className="text-black mt-3 text-xl font-semibold">
                  ${(item * 30000).toLocaleString("es-CO")}
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
                0
              </span>

            </div>

            <div className="flex justify-between p-5 text-black text-2xl font-black">

              <span>
                Total
              </span>

              <span>
                $0
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