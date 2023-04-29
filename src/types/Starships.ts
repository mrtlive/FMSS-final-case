export type Starships = {
  results: Starship[];
  name: string;
  model: string;
  passengers: string;
  max_atmosphering_speed: string;
  manufacturer: string;
  crew: string;
  cargo_capacity: string;
  hyperdrive_rating: string;
  url: string;
};

export type Starship = {
  name: string;
  model: string;
  url: string;
  hyperdrive_rating: string;
};
