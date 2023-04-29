//get starships from swapi function with axios
import axios from "axios";
import { Starship, Starships } from "../types/Starships";

//get starships from swapi with react query
export const getShips = async (page: number) => {
  const { data } = await axios.get<Starships>(`https://swapi.dev/api/starships/?page=${page}`);
  return data;
};

//get single ship
export const getShip = async (id: string) => {
  const { data } = await axios.get<Starships>(`https://swapi.dev/api/starships/${id}`);
  return data;
};
