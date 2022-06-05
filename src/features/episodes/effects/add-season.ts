import { createEffect } from 'effector';
import { TEpisode } from '../../../types';

const addSeason = createEffect((seasonEpisodes: Array<TEpisode>) => {
  return seasonEpisodes;
});

export default addSeason;
