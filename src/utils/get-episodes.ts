const getEpisodes = async (url: string, list: any) => {
  const res = await fetch(url);
  const data = await res.json();
  list = [...list, ...data.results]
  if(data.info.next) list = await getEpisodes(data.info.next, list);
  return list;
};

export default getEpisodes;