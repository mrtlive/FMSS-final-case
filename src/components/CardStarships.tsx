import { Link } from "react-router-dom";
import { Starship } from "../types/Starships";

function CardStarships({ starship }: { starship: Starship }) {
  return (
    <div key={starship.url.split("/").slice(-2)[0]} className="p-5 flex flex-col justify-center items-center bg-gray-800 rounded-3xl">
      <Link to={`/starships/${starship.url.split("/").slice(-2)[0]}`}>
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${starship.url.split("/").slice(-2)[0]}.jpg`}
          alt="Starship"
          className=" rounded-3xl shadow-2xl"
          // if image not exist https://starwars-visualguide.com/assets/img/big-placeholder.jpg
          onError={(e: any) => {
            e.target.onerror = null;
            e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
          }}
        />
      </Link>
      <br />
      <p>{starship.name}</p>
      <p>Model: {starship.model}</p>
      <p>Hyperspace Rating: {starship.hyperdrive_rating}</p>
    </div>
  );
}

export default CardStarships;
