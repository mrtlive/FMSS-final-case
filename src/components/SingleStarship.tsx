import { Starship, Starships } from "../types/Starships";

function SingleStarship({ id, starship }: { id: string | undefined; starship: Starships }) {
  return (
    <div className=" p-12 bg-slate-300 rounded-3xl flex flex-col justify-center items-center  text-black  w-auto mx-5  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        alt="Starship"
        className="  rounded-3xl shadow-xl shadow-black"
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
        }}
      />
      <br />
      <div className="flex flex-col leading-10">
        <p>
          <b>Model:</b> {starship.model}
          <br />
          <b>Passengers:</b> {starship.passengers} <br />
          <b>Max Atmosphering Speed:</b> {starship.max_atmosphering_speed} <br />
          <b>Manufacturer:</b> {starship.manufacturer} <br />
          <b>Crew:</b> {starship.crew} <br />
          <b>Cargo Capacity:</b> {starship.cargo_capacity} <br />
        </p>
      </div>
    </div>
  );
}

export default SingleStarship;
