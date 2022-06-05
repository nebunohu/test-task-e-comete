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

export type TCharacter = {
  "id": number;
  "name": string;
  "status": string;
  "species": string;
  "type": string;
  "gender": string;
  "origin": {
    "name": string,
    "url": string
  };
  "location": {
    "name": string,
    "url": string
  };
  "image": string;
  "episode": Array<string>;
  "url": string;
  "created": string;  
};
