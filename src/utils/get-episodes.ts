const getEpisodes = async (url: string, list: any) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    let newList: any = [...list, ...data.results];
    if (data.info.next) newList = await getEpisodes(data.info.next, newList);
    return newList;
  } catch (error) {
    return error;
  }
};

export default getEpisodes;
