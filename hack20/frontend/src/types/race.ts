export interface Race {
  id: number;
  location: string;
  entrants: Entrant[];
  going: string;
  time: string;
}

export interface Entrant {
  name: string;
  position: number;
}

// races endpoint returns this!
export interface Races {
  races: Race[];
}
