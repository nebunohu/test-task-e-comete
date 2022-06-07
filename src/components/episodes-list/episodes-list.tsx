import { useStore } from 'effector-react';
import React, {
  FC,
  useEffect,
} from 'react';
import { Container } from 'react-bootstrap';
import { API_BASE_URL } from '../../consts';
import { $episodes } from '../../features/episodes';
import addSeason from '../../features/episodes/effects/add-season';
import getEpisodesFx from '../../features/episodes/effects/get-episodes';
import SeasonTable from '../season-table/season-table';

const EpisodesList: FC = () => {
  const { list, seasons } = useStore($episodes);

  const parseSeasons = (seasonRegExp: RegExp) => {
    const seasonEpisodes = list.filter((ep) => ep.episode.match(seasonRegExp));
    if (seasonEpisodes.length) addSeason(seasonEpisodes);
    return !!seasonEpisodes.length;
  };

  useEffect(() => {
    getEpisodesFx(`${API_BASE_URL}/episode`);
  }, []);

  useEffect(() => {
    if (!seasons.length) {
      let foundSeason = true;
      let seasonNumber = 1;
      while (foundSeason) {
        const regExpPattern = `S${seasonNumber < 10 ? `0${seasonNumber}` : seasonNumber}`;
        const regExp = new RegExp(regExpPattern);
        foundSeason = parseSeasons(regExp);
        seasonNumber += 1;
      }
    }
  }, [list]);

  return (
    <Container>
      {seasons.map((season, index) => <SeasonTable key={`S${index + 1}`} index={index} list={season} />)}
    </Container>
  );
};

export default EpisodesList;
