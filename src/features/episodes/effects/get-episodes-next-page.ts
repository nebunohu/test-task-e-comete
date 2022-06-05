import { createEffect } from 'effector';
import { API_BASE_URL } from '../../../consts/index';
import setEpisodesRequest from './set-episodes-request';

const getEpisodesNextPageFx = createEffect(async (page: number) => {
  setEpisodesRequest(true);
  const res = await fetch(`${API_BASE_URL}/episode?page=${page}`);
  const data = await res.json();
  setEpisodesRequest(false);
  return data;
});

export default getEpisodesNextPageFx;
