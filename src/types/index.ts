export type TEpisode = {
  air_date: string;
  characters: Array<string>;
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

export type TInfo = {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
};
