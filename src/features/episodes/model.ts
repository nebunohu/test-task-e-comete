import { createStore } from 'effector';
import { TEpisode } from '../../types';
import addSeason from './effects/add-season';

import getEpisodesFx from './effects/get-episodes';
import setEpisodesRequest from './effects/set-episodes-request';

type TEpisodesState = {
  list: Array<TEpisode>;
  seasons: Array<Array<TEpisode>>;

  isGetEpisodesRequest: boolean;
};

export const initialState: TEpisodesState = {
  list: [],
  seasons: [],

  isGetEpisodesRequest: false,
};

// const saveEpisodes = createEvent

export const $episodes = createStore(initialState)
  .on(getEpisodesFx.doneData, (episodes, newData: any) => {
    return { ...episodes, list: newData };
  })
  .on(setEpisodesRequest, (episodes, requestState: boolean) => {
    return { ...episodes, isGetEpisodesRequest: requestState };
  })
  .on(addSeason, (episodes, seasonEpisodes: Array<TEpisode>) => {
    return { ...episodes, seasons: [...episodes.seasons, seasonEpisodes] };
  });
