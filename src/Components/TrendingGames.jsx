import React, { useEffect } from "react";

const TrendingGames = ({ gameList }) => {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <ul className="md:grid md:grid-cols-3 gap-6 mt-5 lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <li
                key={index}
                className="bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <img
                  src={item.background_image}
                  alt=""
                  className="h-[270px] rounded-t-lg object-cover"
                />
                <h2 className="dark:text-white text-[20px] font-bold p-2">
                  {item.name}
                </h2>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default TrendingGames;
