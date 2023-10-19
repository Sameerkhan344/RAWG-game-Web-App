import React, { useEffect } from "react";

const GamesByGenresId = ({ gameList, selectedGenresName }) => {
  useEffect(() => {
    console.log("GameList:", gameList);
  }, []);
  return (
    <>
      <div>
        <h2 className="font-bold text-[30px] dark:text-white mt-5">
          {selectedGenresName} Games
        </h2>
      </div>

      <ul className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-6 mt-5">
        {gameList.map((item, index) => (
          <li
            key={index}
            className="bg-[#76a8f75e] p-3 rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
          >
            <img
              src={item.background_image}
              alt=""
              className=" w-full h-[270px] rounded-lg object-cover"
            />
            <h2 className="dark:text-white text-[20px] font-bold p-2">
              {item.name}{" "}
              <span className=" bg-green-100 text-green-700 font-bold text-[15px] rounded-sm ml-2 p-1">
                {item.metacritic}
              </span>{" "}
            </h2>
            <h2 className="dark:text-white text-[15px]  p-2">
              ⭐{item.rating} 💬{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GamesByGenresId;
