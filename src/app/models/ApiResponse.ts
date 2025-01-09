export interface ChampionData {
  [key: string]: {
    name: string;
    id: string;
    title: string;
  };
}

export interface ApiResponse {
  data: ChampionData;
}
