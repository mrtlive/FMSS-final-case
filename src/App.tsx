import { useState } from "react";
import Logo from "./assets/swlogo.png";
import "./App.css";
import CardStarships from "./components/CardStarships";
import { Starship, Starships } from "./types/Starships";
import { useQuery } from "@tanstack/react-query";
import { getShips } from "./lib/getShips";

function App() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const { isLoading, error } = useQuery<Starships, Error>(["starships", page], () => getShips(page), {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      setStarships((prevStarships) => [...prevStarships, ...data.results]);
    },
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearchTerm(event.target.value);
  };

  const filteredStarships = starships.filter(
    (starship: { name: string; model: string }) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()) || starship.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex flex-col items-center p-5 text-center bg-gradient-to-r from-yellow-950 to-gray-950 text-white min-h-screen ">
      <h1 className="text-4xl font-bold mb-5">
        <img src={Logo} alt="Star Wars Logo" className="w-60" />
      </h1>
      <input
        type="text"
        placeholder="Search by name or model"
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 rounded-full text-center text-black font-bold mb-5 w-8/12"
      />
      {error && <div>Error fetching data</div>}
      {isLoading && (
        <div>
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900">O</div>
        </div>
      )}
      {!error && !isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {filteredStarships.map((starship: Starship) => (
            <CardStarships starship={starship} key={starship.url.split("/").slice(-2)[0]} />
          ))}
        </div>
      )}
      <button onClick={loadMore} disabled={page === 4 || isLoading} className="bg-gray-800 text-white font-bold p-3 rounded-lg mt-5 disabled:opacity-50">
        {page === 4 ? "No more ships" : isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}

export default App;
