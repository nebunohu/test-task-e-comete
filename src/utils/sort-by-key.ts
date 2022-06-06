import { TEpisode } from '../types';

const sortByKey = (sortingList: Array<TEpisode>, key: string) => {
  let localSortedList = [...sortingList];
  function compareItems(item1: any, item2: any) {
    if (item1[key] > item2[key]) {
      return 1;
    }
    if (item1[key] < item2[key]) {
      return -1;
    }
    return 0;
  }

  function compareItemsByDate(item1: any, item2: any) {
    const date1 = new Date(item1);
    const date2 = new Date(item2);
    if (date1 > date2) {
      return 1;
    }
    if (date1 < date2) {
      return -1;
    }
    return 0;
  }

  function compareItemsByCharactersCount(item1: any, item2: any) {
    const count1 = item1.characters.length;
    const count2 = item2.characters.length;
    if (count1 > count2) {
      return 1;
    }
    if (count1 < count2) {
      return -1;
    }
    return 0;
  }

  if (key === 'air_date') {
    localSortedList = localSortedList.sort(compareItemsByDate);
  } else if (key === 'count') {
    localSortedList = localSortedList.sort(compareItemsByCharactersCount);
  } else {
    localSortedList = localSortedList.sort(compareItems);
  }

  return localSortedList;
};

export default sortByKey;
