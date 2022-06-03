import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { API_BASE_URL } from '../../consts';
import getEpisodesFx from '../../features/episodes/effects/get-episodes';
import EpisodeDetails from '../episode-details/episode-details';
import EpisodesList from '../episodes-list/episodes-list';

// Styles
import styles from './app.module.scss';

const App: FC = () => {
  useEffect(() => {
    getEpisodesFx(`${API_BASE_URL}/episode`);
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <header>
        E-comete Test Task
      </header>
      <div className={`${styles.contentWrapper}`}>
        <Routes>
          <Route path="/" element={<EpisodesList />} />
          <Route path="/:episode" element={<EpisodeDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
