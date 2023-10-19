import axios from "axios";

const key = "64390393675640ffad09bbbc4f28441b";
const data = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = data.get("/genres?key=" + key);
const getAllGames = data.get("/games?key=" + key);

const getGamesListByGenreId = (id) =>
  data.get("/games?key=" + key + "&genres=" + id);
export default {
  getGenreList,
  getAllGames,
  getGamesListByGenreId,
};
