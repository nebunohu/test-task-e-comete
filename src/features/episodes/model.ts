import { createStore } from 'effector';
import { TEpisode, TInfo } from '../../types';

import getEpisodesFx from './effects/get-episodes';

type TEpisodesState = {
  list: Array<TEpisode>;
  info: TInfo | null;
};

export const initialState: TEpisodesState = {
  list: [],
  info: null,
};

// const saveEpisodes = createEvent

export const $episodes = createStore(initialState)
  .on(getEpisodesFx.doneData, (episodes, newData: any) => {
    return { ...episodes, list: newData.results, info: newData.info };
  });
