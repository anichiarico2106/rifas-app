export default function Header() {
  return (

    <header className="bg-[#0f172a] border-b-2 border-yellow-400 shadow-lg sticky top-0 z-50 backdrop-blur-md">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-black font-black text-sm shadow-lg border-2 border-yellow-300">
            LOGO
          </div>

          <div>

            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">
              TU RIFA
            </h1>


          </div>

        </div>

        {/* BOTON */}
        <a
          href="#packages"
          className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 text-black px-5 py-3 rounded-2xl font-black text-sm md:text-base shadow-xl hover:scale-[1.03]"
        >
          Comprar Tickets
        </a>

      </div>

    </header>

  );
}