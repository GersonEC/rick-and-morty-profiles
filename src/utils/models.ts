interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

export interface ProfileModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  created: string;
}
