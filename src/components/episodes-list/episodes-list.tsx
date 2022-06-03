import { useStore } from 'effector-react';
import React, { FC } from 'react';
import { Table } from 'react-bootstrap';
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
            <td>
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
        {/* {episodes.list.length && ( */}
        <tbody>
          {episodes.list.map((ep) => {
            return (
              <tr key={ep.id}>
                <td>
                  {ep.id}
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
        {/* )} */}
        {/* !episodes.list.length && (<tbody><tr><td>list is empty</td></tr></tbody>) */}
      </Table>
    </div>
  );
};

export default EpisodesList;
