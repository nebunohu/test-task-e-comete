import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import EpisodeDetails from '../episode-details/episode-details';
import EpisodesList from '../episodes-list/episodes-list';

// Styles
import styles from './app.module.scss';

const App: FC = () => {
  // useEffect(() => {
  //   getEpisodesFx(`${API_BASE_URL}/episode?page=1`);
  // }, []);

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
