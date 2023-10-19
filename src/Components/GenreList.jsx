import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import axios from "axios";
import { data } from "autoprefixer";

const GenreList = ({ genreId, selectedGenresName }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      //   console.log(resp.data.results);
      setGenreList(resp.data.results);
    });
  };
  console.log(genreList);
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">GenresList</h2>
      <ul>
        {genreList.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setActiveIndex(index);
                genreId(item.id);
                selectedGenresName(item.name);
              }}
              className={`dark:text-white flex items-center gap-2 group
              mb-3 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 ${
                activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null
              }`}
            >
              <img
                src={item.image_background}
                alt=""
                className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-allease-out duration-300  
                    ${activeIndex == index ? "scale-105" : null}`}
              />
              <h2
                className={`dark:white text-[18px] group-hover:font-bold scale-105 transition-allease-out duration-300   ${
                  activeIndex == index ? "font-bold" : null
                }`}
              >
                {item.name}
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GenreList;
