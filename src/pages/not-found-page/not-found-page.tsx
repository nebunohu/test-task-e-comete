import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return (
    <div>
      Page not found. Go to <Link to="/">main page</Link>
    </div>
  );
};

export default NotFoundPage;
