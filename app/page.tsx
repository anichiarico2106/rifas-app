import Header from "./components/Header";
import Hero from "./components/Hero";
import Packages from "./components/Packages";

export default function Home() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen">
      <Header />
      <Hero />
      <Packages />
    </main>
  );
}