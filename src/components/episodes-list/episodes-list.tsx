import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { $episodes } from '../../features/episodes';

// Styles
import styles from './episodes-list.module.scss';

const EpisodesList: FC = () => {
  const episodes = useStore($episodes);
  return (
    <div className={`${styles.wrapper}`}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td className={`${styles.idCell}`}>
              Id
            </td>
            <td>
              Name
            </td>
            <td>
              Air date
            </td>
            <td>
              episode
            </td>
            <td>
              Characters count
            </td>
          </tr>
        </thead>
        <tbody>
          {episodes.list.map((ep) => {
            return (
              <tr key={ep.id}>
                <td className={`${styles.idCell}`}>
                  <Link to={`${ep.id}`}>{ep.id}</Link>
                </td>
                <td>
                  {ep.name}
                </td>
                <td>
                  {ep.air_date}
                </td>
                <td>
                  {ep.episode}
                </td>
                <td>
                  {ep.characters.length}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default EpisodesList;
