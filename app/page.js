import Link from "next/link";


import GameDetail from "@/components/game-detail";


import TrendingGames from "@/components/TrendingGames";


export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 px-8">
        <h1 className="text-6xl font-bold text-[#333] mb-8">
          <span className="font-mono tracking-wider">Days Gone</span>
        </h1>

        <div className="max-w-md">
          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 bg-[#1e1e1e] text-xs text-white rounded">Available on:</span>
            <span className="px-2 py-1 bg-[#1e1e1e] text-xs text-white rounded flex items-center">iOS</span>
            <span className="px-2 py-1 bg-[#1e1e1e] text-xs text-white rounded flex items-center">
              <svg className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 5.5L10.5 3L21 5.5V18.5L10.5 21L3 18.5V5.5Z" stroke="white" strokeWidth="1.5" />
                <path d="M10.5 3V21" stroke="white" strokeWidth="1.5" />
                <path d="M16 7L16 19" stroke="white" strokeWidth="1.5" />
              </svg>
            </span>
          </div>

          <Link href="/buy" className="inline-block px-6 py-3 bg-amber-500 text-black font-bold rounded-full mb-4">
            Buy now for $40 only
          </Link>

          <div className="flex items-center gap-2 text-xs text-green-500">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            All of your friends are playing
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-12">
          <span className="h-2 w-2 bg-white rounded-full"></span>
          <span className="h-2 w-2 bg-gray-600 rounded-full"></span>
          <span className="h-2 w-2 bg-gray-600 rounded-full"></span>
        </div>
      </section>

    

      <TrendingGames />

      {/* Game Detail Sections */}
      <GameDetail
        title="Evolution"
        releaseDate="RELEASE DATE: 20TH DECEMBER"
        description="Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't."
      />

      <GameDetail
        title="Valorant"
        releaseDate="RELEASE DATE: 20TH DECEMBER"
        description="Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't."
      />

      <GameDetail
        title="Warlords"
        releaseDate="RELEASE DATE: 20TH DECEMBER"
        description="Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't."
      />
    </>
  );
}
