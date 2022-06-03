import { createStore } from 'effector';

import getEpisodesFx from './effects/get-episodes';

type TEpisodes = {
  list: Array<any>
};

export const initialState: TEpisodes = {
  list: [],
};

// const saveEpisodes = createEvent

export const $episodes = createStore(initialState)
  .on(getEpisodesFx.doneData, (episodes, newData: any) => {
    return { ...episodes, list: newData };
  });
