export default function Header() {
  return (
    <header className="bg-[#111827] border-b border-yellow-500">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-black text-xs">
            LOGO
          </div>

          <div>
            <h1 className="text-2xl font-black text-white">
              ....
            </h1>

            <p className="text-yellow-400 font-bold text-sm">
              ....
            </p>
          </div>

        </div>

        <a
          href="#packages"
          className="bg-yellow-500 hover:bg-yellow-400 transition-all text-black px-4 py-2 rounded-xl font-bold text-sm"
        >
          Comprar tickets
        </a>

      </div>

    </header>
  );
}