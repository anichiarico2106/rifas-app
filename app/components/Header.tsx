export default function Header() {
  return (
    <header className="bg-[#111827] border-b border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black font-black">
            LOGO
          </div>

          <div>
            <h1 className="text-2xl font-black text-white">
              CABALLOS
            </h1>

            <p className="text-yellow-400 font-bold">
              REVELO
            </p>
          </div>

        </div>

        <div className="bg-yellow-500 text-black px-5 py-3 rounded-2xl font-bold">
          🔥 Juega este Viernes
        </div>

      </div>
    </header>
  );
}