import { createStore } from 'effector';
import { TEpisode, TInfo } from '../../types';
import addSeason from './effects/add-season';

import getEpisodesFx from './effects/get-episodes';
import getEpisodesNextPageFx from './effects/get-episodes-next-page';
import setEpisodesRequest from './effects/set-episodes-request';

type TEpisodesState = {
  list: Array<TEpisode>;
  info: TInfo | null;
  seasons: Array<Array<TEpisode>>;

  isGetEpisodesRequest: boolean;
};

export const initialState: TEpisodesState = {
  list: [],
  info: null,
  seasons: [],

  isGetEpisodesRequest: false,
};

// const saveEpisodes = createEvent

export const $episodes = createStore(initialState)
  .on(getEpisodesFx.doneData, (episodes, newData: any) => {
    return { ...episodes, list: newData };
  })
  .on(getEpisodesNextPageFx.doneData, (episodes, newData: any) => {
    return { ...episodes, list: [...episodes.list, ...newData.results], info: newData.info };
  })
  .on(setEpisodesRequest, (episodes, requestState: boolean) => {
    return { ...episodes, isGetEpisodesRequest: requestState };
  })
  .on(addSeason, (episodes, seasonEpisodes: Array<TEpisode>) => {
    return { ...episodes, seasons: [...episodes.seasons, seasonEpisodes] };
  });
