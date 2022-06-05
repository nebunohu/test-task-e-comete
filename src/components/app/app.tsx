import React, { FC } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import EpisodeDetails from '../episode-details/episode-details';
import EpisodesList from '../episodes-list/episodes-list';
import ErrorBoundary from '../error-boundary/error-boundary';

// Styles
import styles from './app.module.scss';

const App: FC = () => {
  // useEffect(() => {
  //   getEpisodesFx(`${API_BASE_URL}/episode?page=1`);
  // }, []);

  return (
    <ErrorBoundary>
      <div className={`${styles.wrapper}`}>
        <header>
          <Link to="/">E-comete Test Task</Link>
        </header>
        <div className={`${styles.contentWrapper}`}>
          <Routes>
            <Route path="/" element={<EpisodesList />} />
            <Route path="/:episode" element={<EpisodeDetails />} />
          </Routes>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;