import { Link, useParams } from "react-router-dom";
import SingleStarship from "./components/SingleStarship";
import { useQuery } from "@tanstack/react-query";
import { Starships } from "./types/Starships";
import { getShip } from "./lib/getShips";

const SearchDetail = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) throw new Error("No id provided");
  const {
    isLoading,
    error,
    data: starship,
  } = useQuery<Starships, Error>(["starships", id], () => getShip(id), {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Link to="/" className="text-2xl font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 m-5 inline-block border-2 text-white border-slate-200 rounded-full p-1 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <div className="flex justify-center items-center">
        {isLoading && (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">O</div>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-screen">
            <div>There was an error fetching the data.</div>
          </div>
        )}
        {starship && <SingleStarship starship={starship} id={id} />}
      </div>
    </>
  );
};

export default SearchDetail;
