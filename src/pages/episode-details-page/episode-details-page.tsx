import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../consts';
import { $episodes } from '../../features/episodes';
import getEpisodesFx from '../../features/episodes/effects/get-episodes';
import BackButton from '../../components/back-button/back-button';
import Character from '../../components/character/character';

// Styles
import styles from './episode-details-page.module.scss';

const EpisodeDetailsPage: FC = () => {
  const { episode } = useParams();
  const { list } = useStore($episodes);

  const currentEpisode = list.find((el) => el.id.toString() === episode);
  useEffect(() => {
    if (!list.length) getEpisodesFx(`${API_BASE_URL}/episode`);
  }, []);

  return (
    <Container>
      <BackButton />
      <div className={`${styles.wrapper}`}>
        <h1>{currentEpisode?.name}</h1>
        <span>{currentEpisode?.episode}</span>
        <span>{currentEpisode?.air_date}</span>
        <h2>Characters</h2>
        <div className={`${styles.charactersWrapper}`}>
          {currentEpisode && currentEpisode.characters.map((el, index) => <Character key={`index_${index + 1}`} url={el} />)}
        </div>
      </div>
    </Container>
  );
};

export default EpisodeDetailsPage;
