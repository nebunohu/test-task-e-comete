import { createEffect } from 'effector';
import getEpisodes from '../../../utils/get-episodes';
import setEpisodesRequest from './set-episodes-request';

const getEpisodesFx = createEffect<any>(async (url: string) => {
  setEpisodesRequest(true);
  const data = await getEpisodes(url, []);
  setEpisodesRequest(false);
  return data;
});

export default getEpisodesFx;
