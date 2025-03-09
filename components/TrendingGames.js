"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import GameCard from "./game-card";
import gameData from "../services/gameData";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick without SSR
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute z-20 bg-black text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-all duration-200"
    onClick={onClick}
    style={{
      left: "10px", // Keep it visible on mobile
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "20px",
      cursor: "pointer",
      width: "40px", // Larger tap area for mobile
      height: "40px",
    }}
  >
    ◀
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute z-20 bg-black text-white p-2 rounded-full opacity-80 hover:opacity-100 transition-all duration-200"
    onClick={onClick}
    style={{
      right: "10px", // Keep visible on mobile
      top: "50%",
      transform: "translateY(-50%)",
      fontSize: "20px",
      cursor: "pointer",
      width: "40px", // Larger tap area for mobile
      height: "40px",
    }}
  >
    ▶
  </button>
);


export default function TrendingGames() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Fixes react-slick rendering issue
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 500);
  }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
        },
      },
    ],
  };

  if (!isClient) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#1a1509] w-full max-w-screen-xl mx-auto">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-amber-500 font-mono tracking-wider text-center sm:text-left">
        MOST TRENDING
      </h2>
      <Link
        href="/game-store"
        className="text-amber-500 flex items-center hover:underline mt-2 sm:mt-0"
      >
        GO TO GAME STORE <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  
    {/* Game Slider */}
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {gameData && gameData.length > 0 ? (
          gameData.map((game, index) => (
            <div key={index} className="p-2">
              <GameCard
                title={game.title}
                tags={game.tags}
                releaseDate={game.releaseDate}
                price={game.price}
                imageUrl={game.imageUrl}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-white">No trending games available</p>
        )}
      </Slider>
    </div>
  </section>
  
  );
}
