import { useStore } from 'effector-react';
import React, { FC, useEffect } from 'react';
import { API_BASE_URL } from '../../consts';
import { $episodes } from '../../features/episodes';
import getEpisodesFx from '../../features/episodes/effects/get-episodes';

// Styles
import styles from './app.module.scss';

const App: FC = () => {
  const episodes = useStore($episodes);
  useEffect(() => {
    getEpisodesFx(`${API_BASE_URL}/episode`);
  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <div>
        {episodes.list.length && episodes.list.map((ep) => <div key={ep.id}>{ep.name}</div>)}
      </div>
    </div>
  );
};

export default App;
