export interface Place {
  name: string;
  type: string;
  dimension: string;
  residents: string[];
}

export interface ProfileModel {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  created: string;
}

export interface ProfileApiInfo {
  count: number;
  prev: string | null;
  pages: number;
  next: string | null;
}

export interface ErrorModel {
  hasError: boolean;
  message: string;
}
