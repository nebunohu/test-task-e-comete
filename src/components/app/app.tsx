import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes, Link } from 'react-router-dom';
import CharacterPage from '../../pages/character-page/character-page';
import LocationPage from '../../pages/location-page/location-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import EpisodeDetailsPage from '../../pages/episode-details-page/episode-details-page';
import MainPage from '../../pages/main-page/main-page';
import ErrorBoundary from '../error-boundary/error-boundary';

// Styles
import styles from './app.module.scss';

const App: FC = () => {
  return (
    <ErrorBoundary>
      <div className={`${styles.wrapper}`}>
        <header>
          <Container>
            <Link to="/">E-comete Test Task</Link>
          </Container>
        </header>
        <div className={`${styles.contentWrapper}`}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/episode/:episode" element={<EpisodeDetailsPage />} />
            <Route path="/character/:characterId" element={<CharacterPage />} />
            <Route path="/location/:locationId" element={<LocationPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
