import { createEffect } from 'effector';

const getEpisodesFx = createEffect<any>(async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
});

// getEpisodesFx.done.watch(({ result }) => {
//   console.log(result);
// });

export default getEpisodesFx;
