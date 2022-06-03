import { useStore } from 'effector-react';
import React, {
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../consts';
import { $episodes } from '../../features/episodes';
import getEpisodesFx from '../../features/episodes/effects/get-episodes';

// Styles
import styles from './episodes-list.module.scss';

const EpisodesList: FC = () => {
  const [page, setPage] = useState(1);
  const { list/* , info */ } = useStore($episodes);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastEpisodeCardElementRef = useCallback((node: any) => {
    // if (getFavoritesCatsRequest) return;
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(page + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [/* getFavoritesCatsRequest, */page]);

  useEffect(() => {
    getEpisodesFx(`${API_BASE_URL}/episode?page=${page}`);
  }, []);

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
          {list.map((ep, index) => {
            if (index !== list.length - 1) {
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
            }
            return (
              <tr key={ep.id} ref={lastEpisodeCardElementRef}>
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
