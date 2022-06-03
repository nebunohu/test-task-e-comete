import React, { FC, useEffect } from 'react';

// Styles
import styles from './app.module.scss';

const App: FC = function () {
  useEffect(() => {

  }, []);

  return (
    <div className={`${styles.wrapper}`}>
      <div>
        hello
      </div>
    </div>
  );
};

export default App;
