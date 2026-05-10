const packagesList = [
  { cantidad: 3, precio: "$90.000" },
  { cantidad: 5, precio: "$150.000" },
  { cantidad: 10, precio: "$300.000" },
  { cantidad: 20, precio: "$600.000" },
  { cantidad: 50, precio: "$1.500.000" },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-8"
    >

      <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow border border-zinc-200">

        <h2 className="text-5xl font-black text-zinc-900 mb-10">
          🎟️ Paquetes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {packagesList.map((item, index) => (

            <div
              key={index}
              className="border border-zinc-200 rounded-3xl p-8 hover:border-yellow-400 hover:shadow-xl transition-all cursor-pointer"
            >

              <h3 className="text-5xl font-black text-zinc-900">
                {item.cantidad}
              </h3>

              <p className="text-zinc-500 mt-3 text-xl">
                {item.precio}
              </p>

            </div>

          ))}

        </div>

      </div>

      <div className="bg-white rounded-3xl p-8 shadow border border-zinc-200 h-fit sticky top-10">

        <h2 className="text-4xl font-black text-zinc-900">
          Tu Compra
        </h2>

        <div className="mt-8 border border-zinc-200 rounded-2xl overflow-hidden">

          <div className="flex justify-between p-5 border-b border-zinc-200">
            <span>Cantidad</span>
            <span>0</span>
          </div>

          <div className="flex justify-between p-5 font-black text-2xl">
            <span>Total</span>
            <span>$0</span>
          </div>

        </div>

        <button className="w-full mt-8 bg-zinc-900 hover:bg-zinc-800 transition-all text-white py-5 rounded-2xl font-black text-xl">
          Pagar ahora →
        </button>

        <p className="text-center text-zinc-500 mt-6">
          🔒 Pagos 100% seguros
        </p>

      </div>

    </section>
  );
}